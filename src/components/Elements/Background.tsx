import { Backdrop, useTexture } from '@react-three/drei';

export const Background = () => {
  const backgroundImage = useTexture('/background.JPG');

  return (
    <Backdrop
      floor={0.25} // Stretches the floor segment, 0.25 by default
      segments={20} // Mesh-resolution, 20 by default
      scale-z={20}
      scale-y={20}
      scale-x={100}
      position-z={-5}
      position-y={-2}
    >
      <meshBasicMaterial map={backgroundImage} />
    </Backdrop>
    // <mesh position-z={-5}>
    //   <meshStandardMaterial
    //     map={backgroundImage}
    //     emissiveIntensity={100}
    //     emissiveMap={backgroundImage}
    //   />
    //   <planeGeometry args={[100, 100]} />
    // </mesh>
  );
};