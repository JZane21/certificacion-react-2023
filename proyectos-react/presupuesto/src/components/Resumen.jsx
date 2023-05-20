import { ProgressCircle } from "./ProgressCircle";

export const Resumen = ({presupuesto,gastos}) => {

  const datosDesplegables = 
  [
    "Presupuesto: "+presupuesto,
    "Gastos: "+gastos,
    "Total: "+(presupuesto-gastos>0 ? presupuesto-gastos : "GASTOS EXCEDIDOS")
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
          <p key={dato} className="text-base text-bold">{dato}</p>
        ))
      }
    </div>
    </section>
  );
};
