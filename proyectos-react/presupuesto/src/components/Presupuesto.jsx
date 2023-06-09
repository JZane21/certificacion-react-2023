import { useEffect, useState } from "react";

export const Presupuesto = ({cambio,setCambio,presupuesto, setPresupuesto,
  setListaGastos, setGastos}) => {

  // const [click, setClick] = useState(false);

  useEffect(() => {
    setListaGastos([]);
    setGastos(0);
  },[cambio])

  const cambiarPresupuesto = (evento) => {
    evento.preventDefault();
    // modificando el estado
    let valor = 0;

    if(evento.target.value===""){
      setPresupuesto(0);
    }else if(Number(evento.target.value)){
      valor = parseInt(evento.target.value);
      if(valor>=0){
        setPresupuesto(valor);
      }else{
        alert("DATO INACEPTABLE");
      }
    }else{
      alert("DATO INACEPTABLE");
    }
    // no se debe modificar el valor del estado
    // presupuesto = '';
  }

  const handleSubmit = (evento) => {
    evento.preventDefault();
    // console.log(presupuesto);
    // setClick(!click);
    if(presupuesto>0){
      setCambio(true);
    }
  };

  // este de aquí está prohibido
  // useEffect(() => {
  //   console.log('Soy un efecto sin dependencias');
  // });

  // useEffect(() => {
  //   console.log('Solo quiero que te ejecutes la primera vez');
  // },[]);

  // useEffect(() => {
  //   console.log('ejecutate cuando el estado del click cambie');
  // },[click, presupuesto]);

  return (
    <section className="flex flex-row justify-center items-center">
      <div className="
      flex
      flex-col
      m-2
      p-5
      bg-slate-100
      max-w-max
      rounded-lg
      shadow-lg
      h-60
      justify-center
      ">
        <h2 className="font-bold mb-5 text-3xl text-center">Presupuesto</h2>
        <form className="
        flex
        flex-col
        items-center
        "
        onSubmit={handleSubmit}
        >
          <input className="rounded-lg
          outline-none
          border-slate-700
          border-2
          mb-5
          p-1
          w-full
          cursor-pointer
          hover:bg-slate-100
          "
          value={presupuesto}
          onChange={e => {cambiarPresupuesto(e)}}
          placeholder="ingrese el presupuesto"
          type="text"
          />
          <button className="
          rounded-lg
          text-white
          bg-amber-500
          p-2
          font-bold
          w-24
          ">
            agregar
          </button>
        </form>
      </div>
    </section>
    
  );
};
