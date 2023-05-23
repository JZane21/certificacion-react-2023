import { Descripcion } from "./Descripcion";
import { ProgressCircle } from "./ProgressCircle";

export const Resumen = ({presupuesto,gastos,setCambio,setPresupuesto}) => {

  const datosDesplegables = 
  [
    {enunciado: "Presupuesto: ", datoRegistrado: presupuesto, id: 1},
    {enunciado: "Gastos: ", datoRegistrado: parseInt(gastos), id: 2},
    {enunciado: "Total: ", datoRegistrado: (presupuesto-gastos>0 
      ? presupuesto-gastos : "GASTOS EXCEDIDOS"), id: 3}
  ];

  const resetearPresupuesto = () => {
    setCambio(false);
    setPresupuesto('');
  };

  return (
    <section className="
    bg-white shadow-lg rounded-md py-5 w-5/6 lg:w-1/2 mx-auto
    ">
      
      <h2 className="text-stone-500 text-3xl text-center font-bold my-2">
        Resumen {presupuesto}
      </h2> 

      <div className="flex flex-row">
        <ProgressCircle porcentaje={((gastos/presupuesto)*100).toFixed(2)}/>

        <div className="basis-1/2 p-5">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            type="button"
            onClick={resetearPresupuesto}
          >
            Resetear App
          </button>

          {
            datosDesplegables.map(dato => (
              <Descripcion
              id={dato.id}
              enunciado={dato.enunciado}
              datoRegistrado={dato.datoRegistrado}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
};
