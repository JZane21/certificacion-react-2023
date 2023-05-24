export const Gasto = (props) => {
  const DATOS = [
    {tipoDato: "Nombre: ", datoObtenido: props.nombre, id:1},
    {tipoDato: "Cantidad: ", datoObtenido: props.cantidad, id:2},
    {tipoDato: "Categoria: ", datoObtenido:  props.categoria, id:3},
    {tipoDato: "Fecha: ", datoObtenido: props.fecha, id:4}
  ];

  return (
    <div className="flex flex-col bg-white shadow-sm rounded-lg p-2
    mt-2 pl-3 w-max z-10">
      {
        DATOS.map( dato => (
          <p key={dato.id}
          className="text-black flex-wrap">
            <span className="font-bold">{dato.tipoDato}</span> 
            <span className="block">
            {dato.datoObtenido}
            </span>
          </p>
        ))
      }
    </div>
  );
};