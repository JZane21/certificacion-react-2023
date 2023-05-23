import { useState } from "react";
import Presupuesto from "./components/Presupuesto";
import Resumen from "./components/Resumen";
import IconoNuevoGasto from "./assets/nuevo-gasto.svg";
import "./App.css";
import { Modal } from "./components/Modal";
import { ListaDeGastos } from "./components/ListaDeGastos";

function App() {
  const [presupuesto, setPresupuesto] = useState("");
  const [gastos, setGastos] = useState(0);
  const [click, setClick] = useState(false);
  const [newGasto, setNewGasto] = useState(false);

  const [listaGastos, setListaGastos] = useState([]);

  return (
    <div className="container mx-auto bg-slate-400 mt-20">
      {!click ? (
        <Presupuesto
          presupuesto={presupuesto}
          click={click}
          setClick={setClick}
          setPresupuesto={setPresupuesto}
        />
      ) : (
        <>
          <Resumen
            setClick={setClick}
            gastos={gastos}
            setGastos={setGastos}
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
          />
          <div className="fixed bottom-5 right-5">
            <img
              className="w-10 hover:cursor-pointer"
              src={IconoNuevoGasto}
              alt="icono nuevo gasto"
              onClick={() => {
                setNewGasto(true);
              }}
            />
          </div>
          <ListaDeGastos
          listaGastos={listaGastos}
          />
        </>
      )}

      {newGasto && (
          <Modal
          gastos={gastos}
          setGastos={setGastos}
          setNewGasto={setNewGasto}
          listaGastos={listaGastos}
          setListaGastos={setListaGastos}
          />
        )
      }

    </div>
  );
}

export default App;
