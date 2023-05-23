export const BotonAgregar = ({modal,setModal}) => {
  return (
    <div className="flex flex-row-reverse w-full mr-5 h-full">
      <button className="inline-block rounded-full text-white bg-orange-500 
      m-3 font-bold pt-0 pl-3 pb-3 pr-3 text-center text-5xl z-10 shadow-lg
      hover:bg-orange-400 active:bg-orange-600 h-max self-end"
      onClick={() => setModal(!modal)}>
        +
      </button>
    </div>
  );
};
