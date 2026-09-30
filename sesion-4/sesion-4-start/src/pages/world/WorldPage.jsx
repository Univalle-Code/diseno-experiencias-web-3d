import { Canvas } from "@react-three/fiber"
import Ambience from "../../components/Ambience"
import Controls from "../../components/Controls"
import House from "../../components/models-3d/House"
import Stone from "../../components/models-3d/Stone"
import Latern from "../../components/models-3d/Latern"
import Floor from "../../components/models-3d/Floor"

const WorldPage = () => {
    return (
        <Canvas camera={{ position: [0, 2.5, 10] }}>
            <Ambience />
            <Controls />
            <House />
            <Stone position={[-2, 0, 8]} scale={4} />
            <Latern position={[2, 0, 8]} />
            <Floor rotation-x={-Math.PI * 0.5} />
        </Canvas>
    )
}

export default WorldPage;
