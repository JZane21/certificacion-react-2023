import { ProgressCircle } from "./ProgressCircle";

export const Resumen = ({presupuesto,gastos}) => {

  const datosDesplegables = 
  [
    {enunciado: "Presupuesto: ", datoRegistrado: presupuesto, id: 1},
    {enunciado: "Gastos: ", datoRegistrado: parseInt(gastos), id: 2},
    {enunciado: "Total: ", datoRegistrado: (presupuesto-gastos>0 
      ? presupuesto-gastos : "GASTOS EXCEDIDOS"), id: 3}
  ];

  return (
    <section className="
    flex
    flex-row
    p-5
    rounded-lg
    m-5
    bg-slate-300
    items-center
    shadow-xl
    ">
      <ProgressCircle/>
      <div className="flex flex-col m-3">
      {
        datosDesplegables.map(dato => (
          <p key={dato.id} className="text-base text-bold">
            {dato.enunciado} {dato.datoRegistrado}  
          </p>
        ))
      }
    </div>
    </section>
  );
};
