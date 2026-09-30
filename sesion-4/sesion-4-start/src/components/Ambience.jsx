const Ambience = () => {
    return (
        <>
            <color attach={"background"} args={["#000000"]} />
            <ambientLight />
            <directionalLight position={[10, 10, 10]} />
        </>
    )
}

export default Ambience