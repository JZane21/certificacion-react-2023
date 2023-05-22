export const ListaGasto = ({children}) => {
  return (
    <section className="flex flex-col bg-slate-300 rounded-lg p-3 m-3
    max-h-56 shadow-xl overflow-y-auto">
      {children}
    </section>
  );
};
