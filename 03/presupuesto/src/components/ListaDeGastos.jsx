import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from "react-swipeable-list";
import { Gasto } from "./Gasto";

export const ListaDeGastos = ({listaGastos, setListaGastos, gastos, setGastos}) => {

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => console.info('swipe action triggered')}>
        <div className="bg-green-400 text-white font-bold h-full w-full
        text-right">
          <span>
            Editar
          </span>
        </div>
      </SwipeAction>
    </LeadingActions>
  );

  const eliminarElemento = (listaGastos,nombre) => {
    const nuevaLista = [...listaGastos];
    const objetoEncontrado = nuevaLista.find(elemento => 
      elemento.nombre.toLowerCase()===nombre.toLowerCase());
    setGastos(gastos-objetoEncontrado.cantidad);
    setListaGastos([...nuevaLista.filter(elemento => 
      elemento.nombre.toLowerCase()!==nombre.toLowerCase())]);
  };

  const trailingActions = (listaGastos,nombre) => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => eliminarElemento(listaGastos,nombre)}
      >
        <div className="bg-red-400 text-white font-bold h-full w-full
        text-left">
          <span>
            Delete
          </span>
        </div>
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <div className="flex flex-row justify-center items-center mt-3">
      <SwipeableList className="flex flex-col justify-center items-center
      overflow-auto">
        {
          listaGastos.map(elemento => {return (
            <>
              {
                listaGastos.includes(elemento) && (
                  <SwipeableListItem
                  key={elemento.nombre}
                  className="flex flex-row w-max"
                  leadingActions={leadingActions()}
                  trailingActions={trailingActions(listaGastos,elemento.nombre)}
                  >
                    <Gasto
                    nombre={elemento.nombre}
                    cantidad={elemento.cantidad}
                    categoria={elemento.categoria}
                    fecha={elemento.date}
                    />
                  </SwipeableListItem>
                )
              }
            </>
          );})
        }
      </SwipeableList>
    </div>
  );
};
