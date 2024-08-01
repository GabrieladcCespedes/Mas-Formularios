import { useState } from "react";

const FormularioPersona = (props) => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [repetirContrasena, setRepetirContrasena] = useState("");

    const [errores, setErrores] = useState({});

    const validarFormulario = () => {
        const nuevosErrores = {};

        if(nombre && nombre.length < 2){nuevosErrores.nombre = "El nombre debe tener al menos 2 caracteres"}

        if(apellido && apellido.length < 2){nuevosErrores.apellido = "El apellido debe tener al menos 2 caracteres"}

        if(email && email.length < 5){nuevosErrores.email = "El email no es válido, debe tener al menos 5 caracteres"}
        
        if(contrasena && contrasena.length < 8){nuevosErrores.contrasena = "La contraseña dedbe tener al menos 8 caracteres"}

        if (contrasena && repetirContrasena && contrasena !== repetirContrasena){nuevosErrores.repetirContrasena = "Las contraseñas no coinciden"}

        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const enviarFormularioPersona = (e) => {
        e.preventDefault();
        if(validarFormulario()){
            const nuevaPersona = {nombre, apellido, email, contrasena, repetirContrasena}
            props.actualizarListaPersonas(nuevaPersona);
            setNombre("");
            setApellido("");
            setEmail("");
            setContrasena("");
            setRepetirContrasena("");
        }
    }

    return(
        <>
            <h2> Agregar nueva Persona </h2>
            <form onSubmit={enviarFormularioPersona}>
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text"
                        id="nombre"
                        name="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} />
                    {errores.nombre && <p style={{color: "red"}}>{errores.nombre}</p>}
                </div>
                <div>
                    <label htmlFor="apellido">Apellido:</label>
                    <input type="text"
                        id="apellido"
                        name="apellido"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)} />
                    {errores.apellido && <p style={{color: "red"}}>{errores.apellido}</p>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    {errores.email && <p style={{color: "red"}}>{errores.email}</p>}
                </div>
                <div>
                    <label htmlFor="contrasena">Contraseña:</label>
                    <input type="password"
                        id="contrasena"
                        name="contrasena"
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)} />
                    {errores.contrasena && <p style={{color: "red"}}>{errores.contrasena}</p>}
                </div>
                <div>
                    <label htmlFor="repetirContrasena">Repetir Contraseña:</label>
                    <input type="password"
                        id="repetirContrasena"
                        name="repetirContrasena"
                        value={repetirContrasena}
                        onChange={(e) => setRepetirContrasena(e.target.value)} />
                    {errores.repetirContrasena && <p style={{color: "red"}}>{errores.repetirContrasena}</p>}
                </div>
                
                <button> Agregar </button>
            </form>
        </>
    );
}

export default FormularioPersona;