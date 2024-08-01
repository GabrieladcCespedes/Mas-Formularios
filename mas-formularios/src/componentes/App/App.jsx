import { useState } from "react";
import Persona from "../Persona/Persona";
import FormularioPersona from "../FormularioPersona/FormularioPersona";

const App = () => {
  const [listaPersona, setListaPersona] = useState([]);

  const actualizarListaPersonas = (nuevaPersona) => {
    setListaPersona([...listaPersona, nuevaPersona]);
  }

  const eliminarPersonaDeLaLista = (nombre, apellido) => {
    const listaTemporal = [...listaPersona];
    for(let i = 0; i < listaTemporal.length; i ++){
      if(listaTemporal[i].nombre === nombre && listaTemporal[i].apellido === apellido){
        listaTemporal.splice(i, 1);
      }
    }
    setListaPersona(listaTemporal);
  }

  return(
    <>
      <h1> Aplicación de Personas </h1>
      <FormularioPersona actualizarListaPersonas={actualizarListaPersonas} />
      <h2> Lista de Personas </h2>
      {
        listaPersona.map((persona) => {
          return (<Persona nombre={persona.nombre}
                              apellido={persona.apellido}
                              email={persona.email}
                              contrasena={persona.contrasena}
                              repetirContrasena={persona.repetirContrasena}
                              eliminarPersonaDeLaLista={eliminarPersonaDeLaLista}/>)
        })
      }
    </>
  );
}

export default App;