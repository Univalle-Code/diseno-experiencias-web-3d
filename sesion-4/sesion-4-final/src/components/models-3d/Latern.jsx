import { useGLTF } from '@react-three/drei'

export default function Latern(props) {
  const { nodes, materials } = useGLTF('/Latern.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow geometry={nodes.Mesh_0001.geometry} material={materials['Material_0.001']} />
    </group>
  )
}

useGLTF.preload('/Latern.glb')
