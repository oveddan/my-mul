import {
  Center,
  Environment,
  Lightformer,
  SpotLight,
  useContextBridge,
  useGLTF
} from '@react-three/drei';
import { Canvas, ObjectMap } from '@react-three/fiber';
import { useState } from 'react';
import { Object3D } from 'three';
import { GLTF } from 'three-stdlib';
import { AnimationsState } from '../scene/useScene';
import { Context as WagmiContext } from 'wagmi';
import { RegisterOnClickListeners } from '../scene/RegisterOnClickListeners';
import ToggleAnimations from '../scene/ToggleAnimations';
import { OnClickListeners } from '../scene/buildScene';
import { Background } from './Elements/Background';

export const SceneInner = ({
  onClickListeners,
  gltf,
  animations
}: {
  onClickListeners: OnClickListeners;
  gltf: GLTF & ObjectMap;
  animations: AnimationsState;
}) => {
  // const [mainRef, setMainRef] = useState<Object3D | null>(null);
  const [mainRef, setMainRef] = useState<Object3D | null>(null);
  const cloud = useGLTF('/cloud-b.glb');
  const ContextBridge = useContextBridge(WagmiContext);
  return (
    <Canvas className="bg-black">
      <ContextBridge>
        {/* <OrbitControls makeDefault target={mainRef?.position} /> */}
        <Environment background={true}>
          <Lightformer
            form="rect" // circle | ring | rect (optional, default = rect)
            intensity={0.5} // power level (optional = 1)
            color="white" // (optional = white)
            // scale={[10, 5]} // Scale it any way you prefer (optional = [1, 1])
            target={[0, 0, 0]} // Target position (optional = undefined)
          />
        </Environment>
        <directionalLight />
        {/* <Center> */}
        {/* <Backdrop
            floor={0.25} // Stretches the floor segment, 0.25 by default
            segments={20} // Mesh-resolution, 20 by default
            receiveShadow
          >
            <meshStandardMaterial color="#353540" />
          </Backdrop> */}
        <Background />
        <Center position-z={0} position-y={0.5} position-x={0.7}>
          <primitive
            object={cloud.scene}
            position-y={3}
            position-x={2.5}
            rotation-y={Math.PI / 2}
          />
          <primitive object={gltf.scene} ref={setMainRef}>
            <RegisterOnClickListeners
              gltf={gltf}
              onClickListeners={onClickListeners}
            />
          </primitive>
          {/* <Floor /> */}
        </Center>
        {/* </Center> */}
        <ToggleAnimations gltf={gltf} animationsState={animations} />
        {/* </Stage> */}
      </ContextBridge>
    </Canvas>
  );
};
