const Ambience = () => {
    return (
        <>
            <color attach={"background"} args={["#ceffff"]} />
            <ambientLight />
            <directionalLight position={[10, 10, 10]} />
        </>
    )
}

export default Ambience