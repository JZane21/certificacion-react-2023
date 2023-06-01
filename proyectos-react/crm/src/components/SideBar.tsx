interface Props{
  children: JSX.Element
}

export const SideBar = ({children}:Props) => {
  return (
    <section className="flex flex-col w-44 bg-slate-300 p-1 h-full">
      {children}
    </section>
  );
};
