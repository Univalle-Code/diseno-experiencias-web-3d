import { useGLTF } from "@react-three/drei";

export default function Landscape(){
    const landscape = useGLTF("landscape.glb");

    return (
        <mesh >
            <primitive object={landscape.scene} />
        </mesh>
    )
}

useGLTF.preload("landscape.glb");