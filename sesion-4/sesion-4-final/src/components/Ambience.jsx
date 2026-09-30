import { BakeShadows, ContactShadows, Environment, Sky, Stars, useHelper } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js'

const Ambience = () => {
    const directionalLightRef = useRef(null)
    // const pointLightRef = useRef(null)
    const spotLightRef = useRef(null)
    // const rectAreaLightRef = useRef(null)

    useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, "red");
    // useHelper(pointLightRef, THREE.PointLightHelper, 1, "cyan");
    useHelper(spotLightRef, THREE.SpotLightHelper, 1, "cyan");
    // useHelper(rectAreaLightRef, RectAreaLightHelper, "red");

    useFrame((state, delta)=>{
        spotLightRef.current.position.x += Math.cos(state.clock.elapsedTime) * delta
    })

    return (
        <>
            <color attach={"background"} args={["#000000"]} />
            <ambientLight intensity={1} color={"#ffffff"} />
            {/* <directionalLight
                castShadow
                ref={directionalLightRef}
                intensity={5}
                color={"#ffeec6"}
                position={[0, 10, 20]}
                shadow-camera-left={-5}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
                shadow-camera-near={0.01}
                shadow-camera-far={17}
                shadow-mapSize={[1024, 1024]}
                shadow-normalBias={0.05}
            >
                <object3D attach="target" position={[0, 0, 5]} />
            </directionalLight> */}

            {/* <Sky 
                sunPosition={[0, 2, -100]} 
                turbidity={1} 
                rayleigh={10} 
                mieCoefficient={0.005} 
                mieDirectionalG={0.08} 
                /> */}

            {/* <Stars 
                    radius={10} 
                    depth={50} 
                    count={100}
                    factor={2} 
                    saturation={10} 
                    fade 
                    speed={2}
                    /> */}

            <Environment
                files={"https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/2k/ladybrand_heritage_house_2k.exr"}
                background
                ground={{
                    height: 20, // Height of the camera that was used to create the env map (Default: 15)
                    radius: 100, // Radius of the world. (Default 60)
                    scale: 100, // Scale of the backside projected sphere that holds the env texture (Default: 1000)
                }}
            />
            {/* <pointLight
                ref={pointLightRef}
                castShadow
                intensity={0}
                color={"white"}
                position={[1.5, 2, 8]}
            />

         
            
            <rectAreaLight 
                ref={rectAreaLightRef} 
                color={"red"} 
                width={2} 
                height={2} 
                intensity={0} 
                position={[1, 2, 3]} 
                onUpdate={(self) => self.lookAt(2, 0, 0)} 
            /> */}

               <spotLight
                ref={spotLightRef}
                castShadow  
                intensity={20}
                color={"white"}
                position={[-1.5, 5, 13]}
                angle={Math.PI * 0.1}
                distance={20}
                power={5000}
                penumbra={0.1}
                shadow-normalBias={0.05}
                 shadow-mapSize={[4096, 4096]}
            >
                <object3D attach="target" position={[-2, 0, 8]} />
            </spotLight>

            {/* <BakeShadows/> */}

            <ContactShadows frames={1} />

        </>
    )
}

export default Ambience