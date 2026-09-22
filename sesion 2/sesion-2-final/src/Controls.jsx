import { OrbitControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

const Controls = () => {
    const orbitControlsRef = useRef(null)

    useFrame(() => {
        console.log(orbitControlsRef)
    })

    return (
        <OrbitControls 
        ref={orbitControlsRef} 
            enablePan={false} 
            maxAzimuthAngle={Math.PI * 0.75} 
            minAzimuthAngle={Math.PI * 0.35} 
            minPolarAngle={-Math.PI * 0.25}
            maxPolarAngle={Math.PI * 0.75}
            />
    )
}

export default Controls