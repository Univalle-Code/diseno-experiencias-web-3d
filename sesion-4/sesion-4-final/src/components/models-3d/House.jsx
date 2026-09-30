import { useGLTF } from '@react-three/drei'

export default function House(props) {
  const { nodes, materials } = useGLTF('/House.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.Mesh_0.geometry}
        material={materials.Material_0}
      />
    </group>
  )
}

useGLTF.preload('/House.glb')