export const Gasto = (props) => {
  const DATOS = [
    {tipoDato: "Fecha: ", datoObtenido: props.fecha, id:1},
    {tipoDato: "Nombre Gasto: ", datoObtenido:  props.nombreGasto, id:2},
    {tipoDato: "Monto: ", datoObtenido: props.gasto, id:3}
  ];
  return (
    <div className="flex flex-col bg-white shadow-sm rounded-lg p-2 m-2 pl-3">
      {
        DATOS.map( dato => (
          <p key={dato.id} className="text-black">{dato.tipoDato} {dato.datoObtenido}</p>
        ))
      }
    </div>
  );
};
