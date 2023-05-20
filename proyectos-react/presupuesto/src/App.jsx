import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Presupuesto } from './components/Presupuesto'
import { Resumen } from './components/Resumen'

function App() {
  const [presupuesto,setPresupuesto] = useState(0);
  const [gastos,setGastos] = useState(0);
  const [cambio,setCambio] = useState(false);

  return (
    <section className='flex justify-center items-center h-screen'>
      {!cambio && (<Presupuesto
      cambio={cambio}
      setCambio={setCambio}
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      />)}

      {cambio && (<Resumen
      presupuesto={presupuesto}
      gastos={gastos}
      />)}
      
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
