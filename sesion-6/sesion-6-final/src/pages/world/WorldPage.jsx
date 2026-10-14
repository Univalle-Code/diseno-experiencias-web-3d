import { Canvas } from "@react-three/fiber"
import Ambience from "../../components/Ambience"
import Controls from "../../components/Controls"
import { Ring } from "../../components/models-3d/Ring"
import { Html, Text, Text3D, Center, Float } from '@react-three/drei'


const WorldPage = () => {

    return (
        <>
            <Canvas shadows camera={{ position: [0, 1, 5] }}>
                <Ambience />
                <Controls />
                <Ring />
                {/* <Text position={[0, 1, 0]} color="black" font={"/fonts/Roboto-Bold.ttf"} fontSize={12} >
                    Joyeria Fabian
                </Text> */}
                <Float >
                    <Center top>
                        <Text3D
                            position={[0, 1, 0]}
                            font={"/fonts/Earring_Regular.json"}
                            bevelEnabled
                            bevelSize={0.02}
                            height={0.01}
                        >
                            Joyeria Danna
                            <meshNormalMaterial />
                        </Text3D>
                    </Center>
                </Float>


                <Html
                    center
                    position={[0, -1, 0]}
                    transform
                    scale={0.5}
                    distanceFactor={10}
                //fullscreen
                >
                    <button className="button-info">Más información</button>
                </Html>
            </Canvas>
        </>

    )
}

export default WorldPage;
