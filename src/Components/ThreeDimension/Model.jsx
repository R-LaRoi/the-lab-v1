import React, { useRef } from 'react';
import { useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';


export default function Model() {
    const { nodes } = useGLTF("/media/torrus.glb");
    const { viewport } = useThree();
    const torus = useRef(null);
    
    
    useFrame(() => {
        if (torus.current) {
            torus.current.rotation.x += 0.02;
        }
    });

    const materialProps = ({
        color: { value: ' #FF3131' }, 
        thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
        roughness: { value: 0.1, min: 0, max: 1, step: 0.1 }, 
        transmission: { value: 1, min: 0, max: 1, step: 0.1 },
        ior: { value: 1.5, min: 1.0, max: 3.0, step: 0.1 },
        chromaticAberration: { value: 0.02, min: 0, max: 1 },
        backside: { value: true },
    });
    
    return (
        <group scale={viewport.width / 2.75}>
            <Text position={[0, 0, -1]} fontSize={0.5} color="white" anchorX="center" anchorY="middle">
          
            </Text>
            <mesh ref={torus} {...nodes.Torus002}>
                <meshPhysicalMaterial 
                    color={materialProps.color}
                    transparent={false}
                    opacity={.3}
                    // roughness={materialProps.roughness}
                    // transmission={materialProps.transmission}
                    ior={materialProps.ior}
                />
            </mesh>
        </group>
    );
}


useGLTF.preload("/media/torrus.glb");