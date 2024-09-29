'use client';
import { Canvas } from '@react-three/fiber'
import Model from './Model';
import { Environment } from '@react-three/drei'

export default function Index() {
  return (
    <Canvas style={{ height: '300px', width: '100%', background: 'radial-gradient(#FF3131, rgba(107, 121, 238, 0) 70%)', marginTop: '20px' }}>

      <Model />
      <directionalLight intensity={10} position={[10, 8
        , 3]} />
      <Environment preset="city" />

    </Canvas>
  )
}
