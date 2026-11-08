import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect } from "react";

import { Particles } from "./Particles";
import { bindPointer, damp, pointer } from "./pointer";

function Rig() {
  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05);
    state.camera.position.x = damp(state.camera.position.x, pointer.x * 0.5, 2, dt);
    state.camera.position.y = damp(state.camera.position.y, pointer.y * 0.3, 2, dt);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

/** Lightweight underwater particles + bubbles for page headers and CTA bands. */
export default function AmbientScene({ density = 1 }: { density?: number }) {
  useEffect(() => bindPointer(), []);
  return (
    <Canvas dpr={[1, 1.25]} camera={{ position: [0, 0, 10], fov: 45 }} gl={{ alpha: true, antialias: false }}>
      <Rig />
      <Particles count={Math.round(260 * density)} area={[24, 12, 10]} size={3} speed={0.16} />
      <Particles
        count={Math.round(24 * density)}
        area={[22, 12, 6]}
        size={13}
        speed={0.5}
        variant="bubble"
        color="#c8faff"
        opacity={0.6}
      />
    </Canvas>
  );
}
