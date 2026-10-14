import { Sky, Cloud, Sparkles } from "@react-three/drei"

const Ambience = () => {

    return (
        <>
            <Sky />
            <Cloud position={[0, 1, -10]} segments={10} bounds={[5, 3, 3]} volume={4} color="orange" />
            <Sparkles
                color="orange"
                count={100}
                noise={1}
                opacity={1}
                size={2}
                speed={0.3}
                scale={5}
            />
            <ambientLight />
            <directionalLight args={[10, 10, 10]} />
        </>
    )
}

export default Ambience