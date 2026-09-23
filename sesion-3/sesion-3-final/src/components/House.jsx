import { useTexture } from "@react-three/drei"
import * as THREE from 'three';

const House = ({ ...props }) => {

    // const [matcap] = useMatcapTexture('1C70C6_09294C_0F3F73_52B3F6')
    const matcap = useTexture("./1C70C6_09294C_0F3F73_52B3F6.png")

    const PATH = "./rocks/rock_embedded_concrete_"

    const rockTexture = useTexture({
        map: PATH + "diff_1k.jpg",
        normalMap: PATH + "nor_gl_1k.jpg",
        displacementMap: PATH + "disp_1k.png",
        aoMap: PATH + "ao_1k.jpg",
        roughnessMap: PATH + "rough_1k.jpg",
    })

    for (const key in rockTexture) {
        rockTexture[key].repeat.set(10, 10)
        rockTexture[key].wrapS = THREE.RepeatWrapping
        rockTexture[key].wrapT = THREE.RepeatWrapping
    }

    return (
        <group {...props}>
            {/* Base / Cimiento de piedra */}
            <mesh position={[0, 0, 0]} rotation-x={-Math.PI * 0.5} >
                <planeGeometry args={[20, 20, 4, 4]} />
                <meshStandardMaterial 
                    {...rockTexture} // Spread
                />  
            </mesh>

            {/* Paredes principales */}
            <mesh position={[0, 1, 0]}>
                <boxGeometry args={[2.0, 2, 2.0]} />
                <meshStandardMaterial color="#faedcd" />
            </mesh>

            {/* Techo low poly (pirámide de 4 lados) */}
            <mesh position={[0, 2.5, 0]} rotation={[0, Math.PI / 4, 0]}>
                <coneGeometry args={[1.75, 1.5, 4]} />
                <meshMatcapMaterial matcap={matcap} side={THREE.DoubleSide} />
            </mesh>

            {/* Puerta - Marco */}
            <mesh position={[0, 0.5, 1.01]}>
                <boxGeometry args={[0.62, 1.05, 0.05]} />
                <meshStandardMaterial color="#4a3525" />
            </mesh>

            {/* Puerta - Hoja de madera */}
            <mesh position={[0, 0.5, 1.03]}>
                <boxGeometry args={[0.52, 0.95, 0.05]} />
                <meshStandardMaterial color="#7f4f24" />
            </mesh>

            {/* Pomo de la puerta */}
            <mesh position={[0.18, 0.5, 1.07]}>
                <sphereGeometry args={[0.035, 8, 8]} />
                <meshStandardMaterial color="#e9c46a" metalness={0.6} roughness={0.3} />
            </mesh>

        </group>
    )
}

export default House
