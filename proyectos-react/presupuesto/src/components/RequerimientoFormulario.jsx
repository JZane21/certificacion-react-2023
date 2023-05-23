export const RequerimientoFormulario = (
  {instruccion,tipoDato,valueState,placeHolder,actualizarValor}) => {
  return (
    <div key={instruccion}>
      <label className="font-bold">
        {instruccion}
      </label>
      <input 
      className="border-2 w-full mt-1 outline-none mb-3 rounded-lg
      p-1"
      type={tipoDato}
      value={valueState}
      placeholder={placeHolder}
      onChange={(evento) => actualizarValor(evento.target.value)}
      />
    </div>
  );
};
