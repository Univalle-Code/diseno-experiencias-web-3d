import { useGLTF } from "@react-three/drei";

export default function Bee(props) {
    const bee = useGLTF("bee.glb");

    return (
        <mesh {...props}>
            <primitive object={bee.scene} />
        </mesh>
    )
}

useGLTF.preload("bee.glb");