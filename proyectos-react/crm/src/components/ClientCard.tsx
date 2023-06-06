import { useEffect } from "react";
import ClientInterface from "../models/ClientInterface";
import { InfoCard } from "./InfoCard";
import { PhotoCard } from "./PhotoCard"
import { TitleCard } from "./TitleCard";

interface Props{
  Client: ClientInterface,
  onEdit: VoidFunction,
  onDelete: VoidFunction,
}

// useEffect(() => {

// },[]);

export const ClientCard = ({Client,onEdit,onDelete}:Props) => {

  const INFO_CLIENT:string[] = [...Object.keys(Client).map(i => i+"")];
  const INFO_DATE_CLIENT:string[] = [...Object.values(Client).map(i => i+"")];

  const FINAL_DATE_CLIENT_LIST:string[][] = 
  INFO_CLIENT.map((elemento,indice) => [elemento,INFO_DATE_CLIENT[indice]]);

  return (
    <div className="flex flex-col justify-start bg-slate-400 text-white
    font-semibold h-max rounded-lg m-1 w-max border border-gray-300">
      <TitleCard/>
      <table className="flex flex-row justify-start w-max divide-y divide-gray-200">
        {
        FINAL_DATE_CLIENT_LIST.map(elemento => (
          <InfoCard
          dato={elemento[0].toLowerCase()}
          contenido={elemento[1]}
          />
        ))
        }
        <InfoCard
        dato="acciones"
        contenido={
        <div className="flex flex-row p-1">
          <button className="mr-3 p-2 bg-slate-400 rounded-xl 
          hover:bg-slate-300 active:bg-slate-500"> editar </button>
          <button className="mr-1 p-2 bg-slate-400 rounded-xl
          hover:bg-slate-300 active:bg-slate-500"> eliminar </button>
        </div>
        }
        />
      </table>
    </div>
  );
};
