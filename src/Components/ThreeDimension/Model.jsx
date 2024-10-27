import React, { useRef } from 'react'
import { MeshTransmissionMaterial, useGLTF, Text} from "@react-three/drei";
import { useFrame, useThree, } from '@react-three/fiber'



export default function Model() {
    const { nodes } = useGLTF("/media/torrus.glb");
    const { viewport } = useThree()
    const torus = useRef(null);
   

    useFrame(() => {
        if (torus.current) {
            torus.current.rotation.x += 0.02
        }
    })

    const materialProps = {
        thickness: 0.2,
        // roughness: 0,
        transmission: 1,
        ior: 1.2,
        chromaticAberration: 0.02,
        backside: true,
      
    }
    
    
    const scale = viewport.width / 2

    return (
        <group scale={scale} position={[0, 0, -2]}> 
           <Text  position={[0, 0, -1]} color='white' fontSize={.5} anchorX='center' anchorY='middle' font={'/fonts/BaseNeueBlack.ttf'}>
             CREATIVE WEB STUDIO 
            </Text>
            <mesh ref={torus} {...nodes.Torus002}>
                <MeshTransmissionMaterial {...materialProps}/>
            </mesh>
        </group>


        // <group scale={scale} position={[0, 0, -2]}> 
        //     <Text font={'/fonts/Basis-Medium.woff'} position={[0, 0, -1]} fontSize={0.5} color="white" anchorX="center" anchorY="middle">
        //         hello world!
        //     </Text>
        //     <mesh ref={torus} {...nodes.Torus002}>
        //         <MeshTransmissionMaterial {...materialProps}/>
        //     </mesh>
        // </group>
    )
}