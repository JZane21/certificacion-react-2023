import { LeadingActions, SwipeableList } from "react-swipeable-list";
import { Gasto } from "./components/Gasto";

export const ListaDeGastos = ({listaGastos}) => {

  // const leadingActions = () => (
  //   <LeadingActions>
  //     <SwipeableList>

  //     </SwipeableList>
  //   </LeadingActions>
  // );

  return (
    <div className="flex flex-row justify-center items-center">
      <div className="w-96 flex flex-row justify-center items-center
      overflow-auto">
        {
          listaGastos.map(elemento => (
            <Gasto
            nombre={elemento.nombre}
            cantidad={elemento.cantidad}
            categoria={elemento.categoria}
            fecha={elemento.date}
            />
          ))
        }
      </div>
    </div>
  );
};
