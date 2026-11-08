import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

import turtleUrl from "@/assets/hero-turtle.webp";
import { Particles } from "./Particles";
import { bindPointer, damp, pointer } from "./pointer";

/* Feel constants */
const SWIM_SPEED = 1.5; // flipper wave frequency
const FLAP_DEPTH = 0.32; // z-bend of flippers
const TILT = 0.32; // mouse tilt strength
const CAMERA_PARALLAX = 0.55;

function useLayout() {
  const { width, height } = useThree((s) => s.viewport);
  const portrait = width < height * 1.05;
  const tw = portrait ? Math.min(width * 0.95, 6.5) : Math.min(width * 0.5, 7.6);
  return {
    portrait,
    turtleWidth: tw,
    x: portrait ? 0.1 : width * 0.2,
    y: portrait ? -height * 0.2 : 0.05,
  };
}

function Turtle({ onReady }: { onReady?: () => void }) {
  const tex = useTexture(turtleUrl);
  const group = useRef<THREE.Group>(null);
  const readyRef = useRef(false);
  const layout = useLayout();

  useMemo(() => {
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
  }, [tex]);

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: { uMap: { value: tex }, uTime: { value: 0 } },
        vertexShader: /* glsl */ `
          uniform float uTime;
          varying vec2 vUv;
          void main() {
            vUv = uv;
            vec3 p = position;
            vec2 c = vec2(0.6, 0.5);
            float d = distance(uv, c);
            float w = smoothstep(0.16, 0.62, d);
            float wave = sin(uTime * ${SWIM_SPEED.toFixed(2)} - d * 5.0);
            p.z += wave * w * ${FLAP_DEPTH.toFixed(2)};
            p.y += wave * w * 0.07 * sign(uv.y - c.y);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          }
        `,
        fragmentShader: /* glsl */ `
          uniform sampler2D uMap;
          uniform float uTime;
          varying vec2 vUv;
          void main() {
            vec4 c = texture2D(uMap, vUv);
            if (c.a < 0.03) discard;
            float caus = sin(vUv.x * 26.0 + uTime * 1.2) * sin(vUv.y * 21.0 - uTime * 0.9);
            c.rgb += vec3(0.0, 0.32, 0.36) * max(caus, 0.0) * 0.14;
            gl_FragColor = c;
            #include <colorspace_fragment>
          }
        `,
        transparent: true,
        depthWrite: false,
      }),
    [tex],
  );

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05);
    const t = state.clock.elapsedTime;
    material.uniforms["uTime"]!.value = t;
    const g = group.current;
    if (!g) return;
    const scroll = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1.4);
    g.position.x = damp(g.position.x, layout.x + Math.sin(t * 0.3) * 0.18 + scroll * 0.8, 3, dt);
    g.position.y = damp(g.position.y, layout.y + Math.sin(t * 0.75) * 0.14 + scroll * 1.6, 3, dt);
    g.rotation.y = damp(g.rotation.y, pointer.x * TILT - 0.12, 2.5, dt);
    g.rotation.x = damp(g.rotation.x, -pointer.y * TILT * 0.6, 2.5, dt);
    g.rotation.z = Math.sin(t * 0.75) * 0.045;
    if (!readyRef.current) {
      readyRef.current = true;
      onReady?.();
    }
  });

  const w = layout.turtleWidth;
  const h = w * 0.75;

  return (
    <group ref={group} position={[layout.x, layout.y, 0]}>
      <mesh material={material}>
        <planeGeometry args={[w, h, 64, 48]} />
      </mesh>
    </group>
  );
}

function Glow({ position, scale }: { position: [number, number, number]; scale: number }) {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uColor: { value: new THREE.Color("#00d9e8") } },
        vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
        fragmentShader: `
          uniform float uTime; uniform vec3 uColor; varying vec2 vUv;
          void main(){
            float d = distance(vUv, vec2(0.5));
            float a = smoothstep(0.5, 0.0, d);
            a = pow(a, 2.2) * (0.42 + 0.08 * sin(uTime * 0.8));
            gl_FragColor = vec4(uColor, a);
            #include <colorspace_fragment>
          }`,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    [],
  );
  useFrame((s) => (material.uniforms["uTime"]!.value = s.clock.elapsedTime));
  return (
    <mesh position={position} scale={scale} material={material}>
      <planeGeometry args={[1, 1]} />
    </mesh>
  );
}

function Rings() {
  const layout = useLayout();
  const a = useRef<THREE.Mesh>(null);
  const b = useRef<THREE.Mesh>(null);
  const r = layout.turtleWidth * 0.5;
  useFrame((s) => {
    const t = s.clock.elapsedTime;
    if (a.current) a.current.rotation.z = t * 0.08;
    if (b.current) b.current.rotation.z = -t * 0.05;
  });
  return (
    <group position={[layout.x + 0.3, layout.y + 0.2, -1.6]} rotation={[0.25, -0.55, 0]}>
      <mesh ref={a}>
        <torusGeometry args={[r, 0.018, 12, 112]} />
        <meshBasicMaterial color="#00d9e8" transparent opacity={0.55} blending={THREE.AdditiveBlending} toneMapped={false} />
      </mesh>
      <mesh ref={b} scale={1.12}>
        <torusGeometry args={[r, 0.006, 8, 112, Math.PI * 1.4]} />
        <meshBasicMaterial color="#20c7c3" transparent opacity={0.5} blending={THREE.AdditiveBlending} toneMapped={false} />
      </mesh>
    </group>
  );
}

function LightRays() {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 } },
        vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
        fragmentShader: `
          uniform float uTime; varying vec2 vUv;
          void main(){
            float side = smoothstep(0.0, 0.5, vUv.x) * smoothstep(1.0, 0.5, vUv.x);
            float a = side * pow(vUv.y, 1.6) * 0.13;
            gl_FragColor = vec4(0.55, 0.95, 1.0, a);
            #include <colorspace_fragment>
          }`,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    [],
  );
  const group = useRef<THREE.Group>(null);
  useFrame((s) => {
    const t = s.clock.elapsedTime;
    group.current?.children.forEach((c, i) => {
      c.rotation.z = -0.35 + Math.sin(t * 0.25 + i * 1.7) * 0.06 + i * 0.12;
    });
  });
  return (
    <group ref={group} position={[0, 4.5, -3]}>
      {[-3, -0.5, 2.5, 5].map((x, i) => (
        <mesh key={i} position={[x, -3, 0]} material={material}>
          <planeGeometry args={[1.2 + (i % 2) * 0.8, 11]} />
        </mesh>
      ))}
    </group>
  );
}

function Rig() {
  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05);
    const cam = state.camera;
    cam.position.x = damp(cam.position.x, pointer.x * CAMERA_PARALLAX, 2, dt);
    cam.position.y = damp(cam.position.y, pointer.y * CAMERA_PARALLAX * 0.5, 2, dt);
    cam.lookAt(0, 0, 0);
  });
  return null;
}

function GlowForLayout() {
  const layout = useLayout();
  return <Glow position={[layout.x, layout.y, -0.8]} scale={layout.turtleWidth * 1.5} />;
}

export default function HeroScene() {
  const wrap = useRef<HTMLDivElement>(null);
  useEffect(() => bindPointer(), []);
  return (
    <div ref={wrap} className="absolute inset-0">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 10], fov: 40 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Rig />
        <LightRays />
        <Particles count={360} area={[22, 12, 10]} size={3.2} speed={0.18} />
        <Particles count={32} area={[20, 12, 6]} size={14} speed={0.55} variant="bubble" color="#bff8ff" opacity={0.7} />
        <GlowForLayout />
        <Rings />
        <Suspense fallback={null}>
          <Turtle onReady={() => wrap.current?.setAttribute("data-scene-ready", "true")} />
        </Suspense>
      </Canvas>
    </div>
  );
}
