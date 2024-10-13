'use client';
import { Canvas } from '@react-three/fiber'
import Model from './Model';
import { Environment } from '@react-three/drei'

export default function Index() {
  return (


    <div className='absolute inset-0 z-10 mt-12 canvas'>
      <Canvas style={{ width: '45%', marginTop: '1%' }}>
        <Model />
        <directionalLight intensity={2} position={[0, 2, 3]} />
        <Environment preset='city' />
      </Canvas>
    </div>


  )
}
