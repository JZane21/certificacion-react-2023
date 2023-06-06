import ClientInterface from "../models/ClientInterface";
import { crmAPI } from "./crmInstance";

export const setClients = async (clientList:ClientInterface[]) => {
  await crmAPI.patch('http://localhost:3000/clients',[...clientList]);
  // console.log('errorrr');
  // let clientsNotGotten:ClientInterface[] = [];
  // return clientsGotten!==undefined && clientsGotten!==null ? clientsGotten :
  // clientsNotGotten;
};