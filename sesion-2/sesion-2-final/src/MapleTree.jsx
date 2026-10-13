import { useGLTF } from "@react-three/drei"

const MapleTree = (props) => {
    const { nodes, materials } = useGLTF('/maple_tree.glb')

    return (
        <group {...props} dispose={null} scale={0.1} position-y={-4}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2.geometry}
                    material={materials['branch05.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3.geometry}
                    material={materials['mossybark02.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials['mossybark03.001']}
                />
            </group>
        </group>
    )
}

export default MapleTree;