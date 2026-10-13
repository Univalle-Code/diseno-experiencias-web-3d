import { Canvas } from "@react-three/fiber"
import Ambience from "../../components/Ambience"
import Controls from "../../components/Controls"


const WorldPage = () => {

    return (
            <Canvas shadows camera={{ position: [0, 1, 5] }}>
                <Ambience />
                <Controls />
            </Canvas>
    )
}

export default WorldPage;
