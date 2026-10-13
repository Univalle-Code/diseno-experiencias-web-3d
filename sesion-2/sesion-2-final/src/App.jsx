import { Canvas, useFrame } from "@react-three/fiber"
import MapleTree from "./MapleTree"
import Controls from "./Controls"

const App = () => {
 
  return (
    <Canvas pers camera={{position: [0, 0, 5]}} >
      <ambientLight/>
      <directionalLight position={[10, 10, 10]} />
      <Controls />
      <MapleTree/>
    </Canvas>
  )
}

export default App