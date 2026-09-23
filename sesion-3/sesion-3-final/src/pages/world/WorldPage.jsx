import { Canvas } from "@react-three/fiber"
import Ambience from "../../components/Ambience"
import Controls from "../../components/Controls"
import House from "../../components/House"

const WorldPage = () => {
    return (
        <Canvas camera={{position:[0, 2, 5]}}>
            <Ambience/>
            <Controls/>
            <House/>
        </Canvas>
    )
}

export default WorldPage;
