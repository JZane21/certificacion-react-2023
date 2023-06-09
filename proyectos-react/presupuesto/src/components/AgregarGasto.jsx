import { RequerimientoFormulario } from "./RequerimientoFormulario";
import { useEffect, useState } from "react";

export const AgregarGasto = (props) => {
  const listaGastos = props.listaGastos;
  const setListaGastos = props.setListaGastos;
  const setModal = props.setModal;
  const gastos = props.gastos;
  const setGastos = props.setGastos;
  const presupuesto = props.presupuesto;

  const [fechaFormulario,setFechaFormulario] = useState('');
  const [gastoFormulario,setGastoFormulario] = useState('');
  const [montoFormulario, setMontoFormulario] = useState('');

  class GastoRegistrado{
    constructor(fecha,nombreGasto,gasto){
      this.fecha = fecha;
      this.nombreGasto = nombreGasto;
      this.gasto = gasto;
    }
  }

  const handleSubmit = (evento) => {
    evento.preventDefault();
    if(![fechaFormulario,gastoFormulario,montoFormulario].includes('')){
      if(parseInt(presupuesto)>=(gastos+ parseInt(montoFormulario))){
        setListaGastos([...listaGastos, 
          new GastoRegistrado(
            fechaFormulario,gastoFormulario,montoFormulario
          )]);
        setGastos(gastos+ parseInt(montoFormulario));
      }else{
        alert("COMANDO INACEPTABLE");
      }
      setModal(false);
    }
  };

  class InstruccionFormulario {
    constructor(instruccion,placeHolder,valueState,setValueState,tipoDato){
      this.instruccion = instruccion;
      this.placeHolder = placeHolder;
      this.valueState = valueState;
      this.setValueState = setValueState;
      this.tipoDato = tipoDato;
    }

    actualizarValor = (valor) => {
      this.setValueState(valor);
    };

    // actualizarValor = (valor) => {
    //   if("setFechaFormulario"===this.setValueState){
    //     setFechaFormulario(valor);
    //   }else if("setGastoFormulario"===this.setValueState){
    //     setGastoFormulario(valor);
    //   }else{
    //     setMontoFormulario(valor);
    //   }
    // };
  }

  const RequerimientosFormulario = [
    new InstruccionFormulario("Escriba la fecha del gasto","fecha",
      fechaFormulario,setFechaFormulario,"date"),
    new InstruccionFormulario("Escriba el nombre del gasto","nombre del gasto",
      gastoFormulario,setGastoFormulario,"text"),
    new InstruccionFormulario("Escriba el monto del gasto","gasto",
      montoFormulario,setMontoFormulario,"text")
  ];

  return (
    <section className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm
    flex justify-center items-center">
      <form
      className="grid rounded-lg bg-white shadow-lg p-8"
      onSubmit={handleSubmit}>
        <h2 className="font-bold m-1 mb-2 p-1 text-2xl"> 
          Nuevo Gasto
        </h2>
        {
          RequerimientosFormulario.map(orden => (
            <RequerimientoFormulario
            instruccion={orden.instruccion}
            tipoDato={orden.tipoDato}
            valueState={orden.valueState}
            placeHolder={orden.placeHolder}
            actualizarValor={orden.actualizarValor}
            />
          ))
        }
        <div className="flex flex-row">
          <input className="relative rounded-lg p-2 m-2 cursor-pointer 
          uppercase bg-orange-500 text-white font-bold
          hover:bg-orange-400 active:bg-orange-600"
          type="submit" value="agregar gasto"/>
          <button className="relative rounded-lg p-2 m-2 cursor-pointer 
          uppercase bg-orange-500 text-white font-bold
          hover:bg-orange-400 active:bg-orange-600"
          onClick={() => setModal(false)}>
            Cancelar
          </button>
        </div>
      </form>
    </section>
  );
};
