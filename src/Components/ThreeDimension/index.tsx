'use client';
import { Canvas } from '@react-three/fiber'
import Model from './Model';
import { Environment } from '@react-three/drei'

export default function Index() {
  return (
    <Canvas style={{ height: '370px', width: '100%', background: 'radial-gradient(#FF3131, rgba(110, 121, 238, 0) 60%)', marginTop: '30px' }}>

      <Model />
      <directionalLight intensity={2} position={[10, 8
        , 2]} />
      <Environment preset="city" />

    </Canvas>
  )
}
