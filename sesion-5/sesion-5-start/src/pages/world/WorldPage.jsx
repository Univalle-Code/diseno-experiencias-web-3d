import { Canvas } from "@react-three/fiber"
import Ambience from "../../components/Ambience"
import Controls from "../../components/Controls"
import Bee from "../../components/models-3d/Bee"
import Landscape from "../../components/models-3d/Landscape"

const WorldPage = () => {
    return (
        <Canvas shadows camera={{ position: [0, 2, 5] }}>
            <Ambience />
            <Controls />
            <Bee position={[0, 1, 4]} scale={0.01} />
            <Landscape />
        </Canvas>
    )
}

export default WorldPage;
