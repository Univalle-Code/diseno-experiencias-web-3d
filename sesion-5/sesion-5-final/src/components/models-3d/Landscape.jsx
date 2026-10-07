import { useGLTF } from "@react-three/drei";

export default function Landscape(){
    const landscape = useGLTF("landscape.glb");

    return (
        <mesh onClick={(e)=> e.stopPropagation()} >
            <primitive object={landscape.scene} />
        </mesh>
    )
}

useGLTF.preload("landscape.glb");