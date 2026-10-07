import { Canvas } from "@react-three/fiber"
import Ambience from "../../components/Ambience"
import Controls from "../../components/Controls"
import Bee from "../../components/models-3d/Bee"
import Landscape from "../../components/models-3d/Landscape"
import { useMemo } from "react"
import { KeyboardControls } from "@react-three/drei"


const WorldPage = () => {

    const map = useMemo(() => [
        { name: "forward", keys: ['ArrowUp', 'KeyW'] },
        { name: "back", keys: ['ArrowDown', 'KeyS'] },
        { name: "left", keys: ['ArrowLeft', 'KeyA'] },
        { name: "right", keys: ['ArrowRight', 'KeyD'] },
        { name: "jump", keys: ['Space'] },
    ], [])

    return (
        <KeyboardControls map={map}>
            <Canvas shadows camera={{ position: [0, 1, 5] }}>
                <Ambience />
                <Controls />
                <Bee position={[0, 1, 4]} scale={0.01} />
                <Landscape />
            </Canvas>
        </KeyboardControls>
    )
}

export default WorldPage;
