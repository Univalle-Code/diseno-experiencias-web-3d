import { useTexture } from "@react-three/drei"
import { useMemo } from "react"
import * as THREE from "three"

export default function Floor(props) {

    const PATH = useMemo(() => "ground-textures/brown_mud_leaves_01_");

    const textures = useTexture({
        map: PATH + "diff_1k.jpg",
        aoMap: PATH + "ao_1k.jpg",
        normalMap: PATH + "nor_gl_1k.jpg",
        roughnessMap: PATH + "rough_1k.jpg",
        displacementMap: PATH + "disp_1k.png",
    })

    for(const texture in textures){
        textures[texture].repeat.set(5,5)
        textures[texture].wrapS = THREE.RepeatWrapping
        textures[texture].wrapT = THREE.RepeatWrapping
    }

    return (
        <group {...props} dispose={null}>
            <mesh>
                <circleGeometry args={[20, 32]} />
                <meshStandardMaterial {...textures}/>
            </mesh>
        </group>
    )
}

