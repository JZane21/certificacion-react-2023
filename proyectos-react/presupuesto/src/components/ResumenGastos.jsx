import { useState } from "react";
import { ListaGasto } from "./ListaGasto"
import { Resumen } from "./Resumen"
import { Gasto } from "./Gasto";

export const ResumenGastos = (props) => {
  const presupuesto = props.presupuesto;
  const gastos = props.gastos;
  const listaGastos = props.listaGastos;
  const setCambio = props.setCambio;
  const setPresupuesto = props.setPresupuesto;
  // const setListaGastos = props.setListaGastos;
  // const setGastos = props.setGastos;

  return (
    <section className="flex flex-col p-2 bg-transparent 
    justify-center items-center rounded-xl w-4/5 absolute">
      <Resumen
      presupuesto={presupuesto}
      gastos={gastos}
      setCambio={setCambio}
      setPresupuesto={setPresupuesto}
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
    </section>
  )
}
