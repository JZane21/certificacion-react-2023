import { ClientCard } from "../components/ClientCard";
import { clients } from "../data/clientes";

export const ClientsPage = () => {

  return (
    <section className="bg-blue-400 h-full w-full grid grid-cols-3 p-1">
      {
        clients.map(client => (
          <ClientCard key={client.name}
          Client={client}
          />
        ))
      }
    </section>
  );
};
