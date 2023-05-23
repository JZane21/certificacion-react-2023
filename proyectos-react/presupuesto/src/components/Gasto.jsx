export const Gasto = (props) => {
  const DATOS = [
    {tipoDato: "Bs", datoObtenido: props.gasto, id:1},
    {tipoDato: "Tipo: ", datoObtenido:  props.nombreGasto, id:2},
    {tipoDato: "Fecha: ", datoObtenido: props.fecha, id:3}
  ];

  // TAREA 1:
  // + En un componente Gasto: colocar un icono, el gasto, el tipo, y la fecha
  // + Descripcion.jsx----> nombre: Jose

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
