import { useDispatch, useStore, useUpdateStore } from "../context/ContextProvider";
import { types } from "../context/storeReducer";

export const FormClient = () => {
  const { grades } = useStore();
  const dispatch = useDispatch();

  const deleteGrades = () => {
    dispatch({type:types.gradesDeleteAll});
  };
  const createGrades = () => {
    dispatch({type:types.gradesCreate});
  };

  return (
    <form style={{display:'flex', flexDirection:"column",
      justifyContent:'center',alignItems:'center'}}>
      
      {
        grades.length!==0 && (
          <>
          {grades.map(i => (
            <div key={i.id} style={{backgroundColor:'red',color:'white',
            padding:'10px',borderRadius:'10px',marginBottom:'10px'
            }}>
            <p>id: {i.id}</p>
            <p>grade: {i.grade}</p>
            </div>
          ))}
          </>
        )
      }
      <div style={{display:'flex',flexDirection:'column'}}>
        <button style={{marginBottom:'10px'}} onClick={deleteGrades}>
          ELIMINAR NOTAS
        </button>
        <button onClick={createGrades}>
          ACTUALIZAR NOTAS
        </button>
      </div>
    </form>
  );
};
