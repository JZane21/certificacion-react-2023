interface Props{
  dato:string,
  contenido:string|JSX.Element,
}

export const InfoCard = ({dato,contenido}:Props) => {
  
  return (
    <div className="border border-gray-300 rounded-lg shadow-md p-4 bg-blue-500 text-white">
      <h1 className="text-2xl font-semibold mb-2">{dato}</h1>
      <div className="border-t border-white my-2"></div>
      <p className="text-lg">{contenido}</p>
    </div>
  );
};
