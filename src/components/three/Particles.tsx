import { useFrame, useThree } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";

type Props = {
  count?: number;
  area?: [number, number, number];
  color?: string;
  size?: number;
  speed?: number;
  opacity?: number;
  variant?: "dust" | "bubble";
  position?: [number, number, number];
};

/** GPU-animated rising particles or bubbles: positions advance in the vertex shader. */
export function Particles({
  count = 400,
  area = [18, 10, 8],
  color = "#8ff3ff",
  size = 4,
  speed = 0.25,
  opacity = 0.9,
  variant = "dust",
  position = [0, 0, 0],
}: Props) {
  const dpr = useThree((s) => s.gl.getPixelRatio());

  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const seeds = new Float32Array(count);
    // Deterministic pseudo-random so every mount looks the same.
    let s = 1337;
    const rnd = () => {
      s = (s * 16807) % 2147483647;
      return s / 2147483647;
    };
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (rnd() - 0.5) * area[0];
      positions[i * 3 + 1] = (rnd() - 0.5) * area[1];
      positions[i * 3 + 2] = (rnd() - 0.5) * area[2];
      seeds[i] = rnd();
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    g.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));
    return g;
  }, [count, area[0], area[1], area[2]]);

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uColor: { value: new THREE.Color(color) },
          uSize: { value: size },
          uHeight: { value: area[1] },
          uSpeed: { value: speed },
          uPixelRatio: { value: dpr },
          uOpacity: { value: opacity },
        },
        vertexShader: /* glsl */ `
          attribute float aSeed;
          uniform float uTime, uSize, uHeight, uSpeed, uPixelRatio;
          varying float vAlpha;
          void main() {
            vec3 p = position;
            float h = uHeight;
            p.y = mod(p.y + h * 0.5 + uTime * uSpeed * (0.35 + aSeed), h) - h * 0.5;
            p.x += sin(uTime * 0.6 + aSeed * 40.0) * 0.18;
            vec4 mv = modelViewMatrix * vec4(p, 1.0);
            gl_Position = projectionMatrix * mv;
            gl_PointSize = uSize * uPixelRatio * (0.45 + aSeed) * (10.0 / max(-mv.z, 0.5));
            float edge = smoothstep(h * 0.5, h * 0.32, abs(p.y));
            vAlpha = edge * (0.35 + 0.65 * fract(aSeed * 7.31)) * (0.65 + 0.35 * sin(uTime * 1.4 + aSeed * 30.0));
          }
        `,
        fragmentShader:
          variant === "bubble"
            ? /* glsl */ `
          uniform vec3 uColor; uniform float uOpacity; varying float vAlpha;
          void main() {
            vec2 c = gl_PointCoord - 0.5;
            float d = length(c);
            if (d > 0.5) discard;
            float rim = smoothstep(0.5, 0.44, d) * smoothstep(0.30, 0.46, d);
            float spot = smoothstep(0.12, 0.0, length(c - vec2(-0.16, -0.16)));
            float a = (rim * 0.8 + spot * 0.9 + 0.06) * vAlpha * uOpacity;
            gl_FragColor = vec4(uColor, a);
            #include <colorspace_fragment>
          }
        `
            : /* glsl */ `
          uniform vec3 uColor; uniform float uOpacity; varying float vAlpha;
          void main() {
            float d = length(gl_PointCoord - 0.5);
            float a = smoothstep(0.5, 0.0, d);
            gl_FragColor = vec4(uColor, a * a * vAlpha * uOpacity);
            #include <colorspace_fragment>
          }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [variant],
  );

  useFrame((state) => {
    material.uniforms["uTime"]!.value = state.clock.elapsedTime;
    material.uniforms["uPixelRatio"]!.value = state.gl.getPixelRatio();
  });

  return <points geometry={geometry} material={material} position={position} frustumCulled={false} />;
}
