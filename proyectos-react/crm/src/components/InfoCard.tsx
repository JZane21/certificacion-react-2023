import ClientInterface from "../models/ClientInterface";

interface Props{
  Client:ClientInterface;
}

export const InfoCard = ({Client}:Props) => {
  const name:string = Client.name;
  const lastName:string = Client.lastName;
  const company:string = Client.company;
  const INFO = [name,lastName,company];
  return (
    <div className="flex flex-col p-1 m-1 h-max">
      {
        INFO.map(item => (
          <p key={item} className="font-semibold text-white text-base">
            {item}
          </p>
        ))
      }
    </div>
  );
};
