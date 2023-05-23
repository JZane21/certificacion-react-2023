import { useState } from 'react'
import { BotonAgregar } from "./components/BotonAgregar";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Presupuesto } from './components/Presupuesto'
import { AgregarGasto } from './components/AgregarGasto';
import { ResumenGastos } from './components/ResumenGastos';

function App() {
  const [presupuesto,setPresupuesto] = useState('');
  const [gastos,setGastos] = useState(0);
  const [cambio,setCambio] = useState(false);
  const [modal,setModal] = useState(false);

  const [listaGastos,setListaGastos] = useState([]);

  return (
    <section className='
    flex flex-col container mx-auto bg-slate-400 justify-center items-center
    h-screen
    '>
      {!cambio && (<Presupuesto
      cambio={cambio}
      setCambio={setCambio}
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      setGastos={setGastos}
      setListaGastos={setListaGastos}
      />)}

      {(cambio) && (
        <ResumenGastos
        presupuesto = {presupuesto}
        gastos = {gastos}
        setModal = {setModal}
        listaGastos = {listaGastos}
        setCambio = {setCambio}
        setPresupuesto={setPresupuesto}
        setListaGastos={setListaGastos}
        setGastos = {setGastos}
        modal = {modal}
        />
      )}
      
      {modal && (
        <AgregarGasto
        listaGastos={listaGastos}
        setListaGastos={setListaGastos}
        setModal={setModal}
        gastos={gastos}
        modal={modal}
        presupuesto={presupuesto}
        />
      )}

      {cambio && (
        <BotonAgregar
        modal={modal}
        setModal={setModal}
        />
      )}
      

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> 
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>*/}
    </section>
  )
}

export default App
