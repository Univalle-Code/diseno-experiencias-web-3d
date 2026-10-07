import { useAnimations, useGLTF, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export default function Bee(props) {
    const { scene, animations } = useGLTF("bee.glb");
    const { actions } = useAnimations(animations, scene)
    const beeRef = useRef(null);

    const ANIMATIONS = useMemo(() => ["_bee_idle", "_bee_take_off_and_land", "_bee_hover"], []);
    const [action, setAction] = useState(ANIMATIONS[0]);

    useEffect(() => {
        const currentAction = actions[action];
        currentAction?.reset().fadeIn(0.2).play()

        return () => {
            currentAction?.fadeOut(0.2);
        }
    }, [action, actions])

    const onBeeHandle = useCallback((e) => {
        e.stopPropagation();
        setAction(ANIMATIONS[1]);
    }, [ANIMATIONS])


    const [sub, get] = useKeyboardControls();


    useFrame((state, delta) => {
        const { forward, back, left, right, jump } = get()

        if (forward) {
            beeRef.current.position.z += 1 * delta 
        } else if (back) {
             beeRef.current.position.z -= 1 * delta 
        } else if (left) {
             beeRef.current.position.x -= 1 * delta 
        } else if (right) {
            beeRef.current.position.x += 1 * delta 
        } else if (jump) {
            beeRef.current.position.y += 1 * delta 
        } else {
            console.log("la abeja esta quieta")
        }

        // Fetch fresh data from store
        const pressed = get().back
    })


    return (
        <mesh
            ref={beeRef}
            {...props}
            onClick={(e) => onBeeHandle(e)}
            name="bee"
        >
            <primitive object={scene} />
        </mesh>
    )
}

useGLTF.preload("bee.glb");