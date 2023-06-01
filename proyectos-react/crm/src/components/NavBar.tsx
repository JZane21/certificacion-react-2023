interface Props{
  children: JSX.Element
}

export const NavBar = ({children}:Props) => {
  return (
    <section className="flex flex-row items-center w-screen bg-slate-700
    h-20">
      {children}
    </section>
  );
};
