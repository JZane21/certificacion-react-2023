import { useState } from "react";
import ClientInterface from "../models/ClientInterface";
import { useForm } from "react-hook-form";
import { setClients } from "../services/setClients";
import { getClients } from "../services/clientsService";
import { useLoaderData } from "react-router-dom";

// type setClientList = (clientList:ClientInterface[]) => void;
// interface Props{
//   clientList:ClientInterface[],
//   setClientList:setClientList,
// }

export const AddClientPage = () => {
  const { register, handleSubmit, reset } = useForm<ClientInterface>();
  const dataClients:Object = async ():Promise<ClientInterface[]> => {
    return await getClients();
  };
  
  const onSubmit = (data: ClientInterface) => {
    // console.log(data);

    const newArray:ClientInterface[] =
    [...Object.values(dataClients)
      .filter(i => Array.isArray(i)) as ClientInterface[]];

    setClients([...newArray,data]);

    reset();
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto bg-slate-200 p-8 shadow-sm rounded h-max">
        <h1 className="text-2xl font-bold mb-6">Agregar Cliente</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nombre:
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            {...register('name')}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Apellido:
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            {...register('lastName')}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Empresa:
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            {...register('company')}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Agregar Cliente
        </button>
      </form>
    </section>
  );
};
