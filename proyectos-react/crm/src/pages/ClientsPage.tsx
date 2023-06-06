import { useEffect, useState } from "react";
import { ClientCard } from "../components/ClientCard";
import { clients } from "../data/clientes";
import axios from "axios";
import { getClients } from "../services/clientsService";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import ClientInterface from "../models/ClientInterface";

// type setClients = (clientList:ClientInterface[]) => void;
// interface Props{
//   clientList:ClientInterface[],
//   setClientList:setClients,
// }

export const ClientsPage = () => {
  const [clientList,setClientList] = useState<ClientInterface[]>([]);
  // const [clients,setClients] = useState<ClientInterface[]>([]);

  // const getClient = async ():Promise<ClientInterface[]> => {
  //   const clientResponse = await axios.get('http://localhost:3000/clients');
  //   const {data} = clientResponse;
  //   return data;
  // };

  // useEffect(() => {
  //   getClient().then((data:ClientInterface[]) => {
  //     setClients(data);
  //   })
  // },[]);
  const navigate = useNavigate();
  const data:Object = useLoaderData() as Object;
  // const data:ClientInterface[] = useLoaderData() as LoaderData<typeof loader>
  useEffect(()=>{
    // Object.values(data).filter(i => Array.isArray(i)).map(i => console.log(i));
    const newArray:ClientInterface[] =
    [...Object.values(data)
      .find(i => Array.isArray(i)) as ClientInterface[]];
      // Object.values(data)[0] as ClientInterface[];

    if(newArray.length!==0){
      setClientList
      ([...newArray]);
    }
  },[]);

  // useEffect(() => {
  //   const f = async () => {
  //     const clientResponse = await getClients();
  //     const {data} = clientResponse;
  //     setClients(data);
  //   };
  //   f();
  // },[]);

  return (
    <section className="bg-blue-400 h-full w-full grid grid-cols-3 p-1">
      {
        clientList.map(client => (
          <ClientCard
          key={client.name}
          Client={client}
          onEdit={()=>{
            navigate("/home/add_client",{
              state:{
                ...client
              }
            });
            console.log('arreglado');
          }}
          onDelete={()=>{
            console.log('eliminado');
          }}
          />
        ))
      }
      {/* <button
        className="rounded-full bg-cyan-400 text-white w-max h-max
        pl-3 pr-3 pb-3 font-bold text-5xl bottom-0 hover:bg-cyan-300
        active:bg-cyan-500"
      >
        +
      </button> */}
    </section>
  );
};
