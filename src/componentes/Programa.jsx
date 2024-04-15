function Programa(props) {
    return (
        <>
            <h2>Detalle del personaje {props.name}</h2>
            <img src={props.image} alt={props.name} />
        </>
    )
}
export default Programa