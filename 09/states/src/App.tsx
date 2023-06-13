import { StoreProvider, useChangeAuth, useStore,useDispatch } from './context/ContextProvider';
import { FormClient } from './components/FormClient';
import { types } from './context/storeReducer';
function App() {

  const { auth } = useStore();
  const logg = useDispatch();

  const changeStateLogin = () => {
    logg({type: auth ? types.changeAuthFalse : types.changeAuthTrue});
  };

  return (
    <>
      
      <section style={{position:'fixed',left:0,right:0,top:0,bottom:0,
      display:'flex',justifyContent:'center',alignItems:'center'}}>
        
        {
          !auth && (<FormClient/>)
        }
        <button onClick={changeStateLogin}>
          {!auth ? 'LOG OUT' : 'LOG IN'}
        </button>
      </section>
    </>
  );
};

export default App
