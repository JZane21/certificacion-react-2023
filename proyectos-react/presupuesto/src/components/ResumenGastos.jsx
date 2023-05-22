import { useState } from "react";
import { ListaGasto } from "./ListaGasto"
import { Resumen } from "./Resumen"
import { Gasto } from "./Gasto";

export const ResumenGastos = (props) => {
  const presupuesto = props.presupuesto;
  const gastos = props.gastos;
  const setModal = props.setModal;
  const listaGastos = props.listaGastos;

  return (
    <section className="flex flex-col p-2 m-2 bg-transparent border-2
    border-blue-600 justify-center items-center rounded-xl">
      <Resumen
      presupuesto={presupuesto}
      gastos={gastos}
      />
      { listaGastos.length!==0 &&
        (<ListaGasto>
          {
            listaGastos.map(gastoRealizado => (
              <Gasto
              key={gastoRealizado.nombreGasto}
              fecha={gastoRealizado.fecha}
              nombreGasto={gastoRealizado.nombreGasto}
              gasto={gastoRealizado.gasto}/>
            ))
          }
        </ListaGasto>)
      }
      <div className="flex flex-row-reverse w-full">
        <button className="inline-block rounded-full text-white bg-orange-400 
        m-1 font-bold pt-0 pl-3 pb-3 pr-3 text-center text-5xl"
        onClick={() => setModal(true)}>
          +
        </button>
      </div>
    </section>
  )
}
