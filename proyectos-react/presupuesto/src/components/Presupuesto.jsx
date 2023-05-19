import { useState } from "react";

export const Presupuesto = () => {

  const [presupuesto, setPresupuesto] = useState("");

  const cambiarPresupuesto = (evento) => {
    evento.preventDefault();
    setPresupuesto(evento.target.value);
  }

  const handleSubmit = () => {
    alert(presupuesto);
  };

  return (
    <section className="flex flex-col bg-white items-center">
      <h2 className="font-bold mb-5 text-3xl">Presupuesto</h2>
      <form className="
      flex
      flex-col
      items-center
      m-2
      p-3
      bg-slate-100
      max-w-max
      rounded-lg
      shadow-lg
      "
      onSubmit={handleSubmit}
      >
        <input className="rounded-lg
        outline-none
        border-slate-700
        border-2
        mb-5
        p-1
        w-full
        cursor-pointer
        hover:bg-slate-100
        "
        value={presupuesto}
        onChange={e => {cambiarPresupuesto(e)}}
        placeholder="ingrese el presupuesto"
        type="text"
        />
        <button className="
        rounded-lg
        text-white
        bg-amber-500
        p-2
        font-bold
        ">
          submit
        </button>
      </form>
    </section>
  );
};
