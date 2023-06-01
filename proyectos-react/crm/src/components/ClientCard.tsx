import ClientInterface from "../models/ClientInterface";
import { InfoCard } from "./InfoCard";
import { PhotoCard } from "./PhotoCard"
import { TitleCard } from "./TitleCard";

interface Props{
  Client: ClientInterface;
}

export const ClientCard = ({Client}:Props) => {
  return (
    <div className="flex flex-row justify-start bg-slate-400 text-white
    font-semibold h-max rounded-lg m-1">
      <PhotoCard/>
      <div className="flex flex-col justify-start">
        <TitleCard/>
        <InfoCard
        Client={Client}
        />
      </div>
    </div>
  );
};
