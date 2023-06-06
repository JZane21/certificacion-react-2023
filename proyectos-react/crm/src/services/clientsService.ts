import ClientInterface from "../models/ClientInterface";
import { crmAPI } from "./crmInstance";

export const getClients = async ():Promise<ClientInterface[]> => {
  const clientsGotten:ClientInterface[] =
  await crmAPI.get('http://localhost:3000/clients');
  let clientsNotGotten:ClientInterface[] = [];
  return clientsGotten!==undefined && clientsGotten!==null ? clientsGotten :
  clientsNotGotten;
};

// const getClient = async ():Promise<ClientInterface[]> => {
  //   const clientResponse = await axios.get('http://localhost:3000/clients');
  //   const {data} = clientResponse;
  //   return data;
  // };