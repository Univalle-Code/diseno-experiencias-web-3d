import { useGLTF } from '@react-three/drei'

export default function Stone(props) {
  const { nodes, materials } = useGLTF('/Stone.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Mesh_0.geometry} material={materials.Material_0} />
    </group>
  )
}

useGLTF.preload('/Stone.glb')