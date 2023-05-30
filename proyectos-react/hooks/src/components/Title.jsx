import { useEffect, useState } from "react";
export const Title = () => {
  // {motherLastName, verifyLoaded}
  const [name,setName] = useState('Jose');
  const [lastName, setLastName] = useState('Carrasco');
  const [cambioNombre, setCambioNombre] = useState(false);
  
  // este useEffect va a escuchar todos los estados
  
  // si colocamos corchetes, se reenderiza solo al refrescar la pagina
  // y un render extra porque seria la primera vez de ese render

  // y si colocamos un estado entre corchetes, se ejecuta si escucha un
  // cambio en ese estado en especifico
  useEffect(() => {
    console.log(name);
  },[name]);

  // useEffect(() => {
  //   debugger;
  //   verifyLoaded(true);
  // },[]);

  const agregarNombreCompleto = () => {
    if(!cambioNombre){
      setName(name+' Samuel');
      setLastName(lastName+' Encinas');
      
    }else{
      let ARREGLO_AUXILIAR = name.split(' ');
      setName(ARREGLO_AUXILIAR.filter(i => i!=='Samuel')[0]);
      ARREGLO_AUXILIAR = lastName.split(' ');
      setLastName(ARREGLO_AUXILIAR.filter(i => i!=='Encinas')[0]);
    }
    setCambioNombre(!cambioNombre);
  };

  return (
    <div style={{marginRight:"50px"}}>
      <h1 style={{marginTop:"0px"}}>
        {name} {lastName}
      </h1>
      <button onClick={agregarNombreCompleto}>
        boton base
      </button>
    </div>
  );
};
