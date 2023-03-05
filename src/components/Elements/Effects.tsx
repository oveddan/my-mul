import { Bloom, EffectComposer, SSAO } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

export const Effects = () => (
  <EffectComposer>
    <Bloom
      luminanceThreshold={0}
      luminanceSmoothing={0.9}
      height={200}
      intensity={0.5}
    />
    <SSAO
      blendFunction={BlendFunction.MULTIPLY} // blend mode
      samples={30} // amount of samples per pixel (shouldn't be a multiple of the ring count)
      rings={4} // amount of rings in the occlusion sampling pattern
      distanceThreshold={1.0} // global distance threshold at which the occlusion effect starts to fade out. min: 0, max: 1
      distanceFalloff={0.0} // distance falloff. min: 0, max: 1
      rangeThreshold={0.5} // local occlusion range threshold at which the occlusion starts to fade out. min: 0, max: 1
      rangeFalloff={0.1} // occlusion range falloff. min: 0, max: 1
      luminanceInfluence={0.9} // how much the luminance of the scene influences the ambient occlusion
      radius={20} // occlusion sampling radius
      scale={0.5} // scale of the ambient occlusion
      bias={0.5} // occlusion bias
    />
  </EffectComposer>
);