export const Descripcion = ({id,enunciado,datoRegistrado}) => {
  return (
    <p key={id} className="text-base text-bold flex flex-row">
      <span className="font-bold">
        {enunciado}
      </span>
      {datoRegistrado}  
    </p>
  );
};
