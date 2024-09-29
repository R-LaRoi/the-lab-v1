import React, { useRef } from 'react';
import { useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function Model() {
    const { nodes } = useGLTF("/media/torrus.glb");
    const { viewport } = useThree();
    const torus = useRef(null);
    
const color = new THREE.Color("rgb(255,49,49)");
    useFrame(() => {
        if (torus.current) {
            torus.current.rotation.x += 0.02;
        }
    });

    const materialProps = ({
        color: color, 
        thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    
    });
    
    return (
        <group scale={viewport.width / 2.25}>
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