export const ColorButton = ({setBgColor, tipo}) => {
  return (
    <button style={{margin:'10px'}} onClick={() => {setBgColor(tipo)}}>
      {tipo === 'red' && 'red'}
      {tipo === 'blue' && 'blue'}
      {tipo === 'black' && 'black'}
    </button>
  );
};
