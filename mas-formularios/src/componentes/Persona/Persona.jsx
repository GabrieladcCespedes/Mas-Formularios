const Persona= (props) => {

    const eliminarPersona = () => {
        props.eliminarPersonaDeLaLista(props.nombre, props.apellido);
    }

    return(
        <>
            <p> Nombre: {props.nombre} </p>
            <p> Apellido: {props.apellido} </p>
            <p>Email: {props.email}</p>
            <p> Contraseña: {props.contrasena}</p>
            <p> Repetir Contraseña: {props.repetirContrasena}</p>
            <button onClick={eliminarPersona}> Eliminar </button>
        </>
    );
}

export default Persona;