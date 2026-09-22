const House = ({...props }) => {
    return (
        <group {...props}>
            {/* Base / Cimiento de piedra */}
            <mesh position={[0, 0, 0]} rotation-x={-Math.PI * 0.5} scale={[10, 10, 10]}>
                <planeGeometry args={[2, 2]} />
                <meshStandardMaterial color="#8d99ae" />
            </mesh>

            {/* Paredes principales */}
            <mesh position={[0, 1, 0]}>
                <boxGeometry args={[2.0, 2, 2.0]} />
                <meshStandardMaterial color="#faedcd" />
            </mesh>

            {/* Techo low poly (pirámide de 4 lados) */}
            <mesh position={[0, 2.5, 0]} rotation={[0, Math.PI / 4, 0]}>
                <coneGeometry args={[1.75, 1.5, 4]} />
                <meshStandardMaterial color="#d95d39" />
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
