import cloudImg from '@/assets/textures/cloud.png';
import { Instance, Instances, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Group } from 'three';

type CloudGroupProps = {
  count: number;
  scale: number;
  yRange: number;
  speedFactor: number;
};

const CloudGroup = ({ count, scale, yRange, speedFactor }: CloudGroupProps) => {
  const groupRef = useRef<Group>(null);
  const texture = useTexture(cloudImg);

  const [particles] = useState(() => {
    return new Array(count).fill(0).map(() => ({
      x: (Math.random() * 2 - 1) * 10,
      y: (Math.random() * 2 - 1) * yRange,
      z: 0.1 + Math.random() * 1.9,
    }));
  });

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const moveSpeed = (delta * 5) / -speedFactor;
    groupRef.current.position.x += moveSpeed;

    if (groupRef.current.position.x <= -20) groupRef.current.position.x = 20;
  });

  return (
    <group ref={groupRef} position={[20, 0, 0]}>
      <Instances renderOrder={2} range={count} frustumCulled={false}>
        <planeGeometry args={[scale, scale]} />
        <meshBasicMaterial
          map={texture}
          transparent
          opacity={0.085}
          depthTest={false}
          depthWrite={false} />
        {particles.map((data, i) => (
          <Instance key={i} position={[data.x, data.y, data.z]} />
        ))}
      </Instances>
    </group>
  );
};

export default CloudGroup;
