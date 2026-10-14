import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Ring(props) {
    const { nodes, materials } = useGLTF('/Ring.glb')
    return (
        <group {...props} dispose={null}>
            <group rotation={[-2.414, -0.028, -0.005]} scale={0.4}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <mesh
                        geometry={nodes.Cylinder_Material006_0.geometry}
                        material={materials['Material.006']}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    />
                    <mesh
                        geometry={nodes.Gem_Material002_0.geometry}
                        material={materials['Material.002']}
                        position={[0, 0, 126.267]}
                        scale={25.13}
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/Ring.glb')
