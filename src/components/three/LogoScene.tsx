import { Canvas, useFrame } from "@react-three/fiber";
import { Float, useTexture } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

import emblemUrl from "@/assets/brand/emblem-lg.webp";
import { Particles } from "./Particles";
import { bindPointer, damp, pointer } from "./pointer";

function Emblem() {
  const tex = useTexture(emblemUrl);
  useMemo(() => {
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
  }, [tex]);
  const w = 2.5;
  return (
    <group>
      {/* Back-layer duplicate gives the flat mark real thickness when it turns */}
      {[0, -0.03, -0.06].map((z, i) => (
        <mesh key={i} position={[0, 0, z]}>
          <planeGeometry args={[w, w * 0.91]} />
          <meshBasicMaterial
            map={tex}
            transparent
            alphaTest={0.05}
            toneMapped={false}
            color={i === 0 ? "#ffffff" : "#0b3440"}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

function GlassOrb() {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 } },
        vertexShader: `
          varying vec3 vN; varying vec3 vV;
          void main(){
            vec4 mv = modelViewMatrix * vec4(position,1.0);
            vN = normalize(normalMatrix * normal);
            vV = normalize(-mv.xyz);
            gl_Position = projectionMatrix * mv;
          }`,
        fragmentShader: `
          uniform float uTime; varying vec3 vN; varying vec3 vV;
          void main(){
            float f = pow(1.0 - abs(dot(vN, vV)), 2.6);
            vec3 col = mix(vec3(0.0, 0.85, 0.91), vec3(0.75, 0.98, 1.0), f);
            gl_FragColor = vec4(col, f * (0.75 + 0.1 * sin(uTime)));
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
    <mesh material={material}>
      <sphereGeometry args={[2.05, 40, 40]} />
    </mesh>
  );
}

function OrbitRings() {
  const a = useRef<THREE.Mesh>(null);
  const b = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    const t = s.clock.elapsedTime;
    if (a.current) a.current.rotation.z = t * 0.35;
    if (b.current) b.current.rotation.z = -t * 0.22;
  });
  return (
    <>
      <mesh ref={a} rotation={[Math.PI / 2.3, 0, 0]}>
        <torusGeometry args={[2.45, 0.022, 12, 128]} />
        <meshBasicMaterial color="#00d9e8" transparent opacity={0.85} blending={THREE.AdditiveBlending} toneMapped={false} />
      </mesh>
      <mesh ref={b} rotation={[Math.PI / 2.05, 0.35, 0]}>
        <torusGeometry args={[2.8, 0.008, 8, 128, Math.PI * 1.5]} />
        <meshBasicMaterial color="#20c7c3" transparent opacity={0.6} blending={THREE.AdditiveBlending} toneMapped={false} />
      </mesh>
    </>
  );
}

function Rig({ children }: { children: React.ReactNode }) {
  const g = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05);
    if (!g.current) return;
    g.current.rotation.y = damp(g.current.rotation.y, pointer.x * 0.45 + Math.sin(state.clock.elapsedTime * 0.4) * 0.15, 2, dt);
    g.current.rotation.x = damp(g.current.rotation.x, -pointer.y * 0.25, 2, dt);
  });
  return <group ref={g}>{children}</group>;
}

export default function LogoScene() {
  useEffect(() => bindPointer(), []);
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 7.2], fov: 45 }} gl={{ alpha: true, antialias: true }}>
      <Particles count={110} area={[7, 6, 4]} size={2.6} speed={0.15} />
      <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.6}>
        <Rig>
          <GlassOrb />
          <OrbitRings />
          <Suspense fallback={null}>
            <Emblem />
          </Suspense>
        </Rig>
      </Float>
    </Canvas>
  );
}
