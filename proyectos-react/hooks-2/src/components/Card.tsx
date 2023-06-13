import {useState,useMemo} from 'react';
import { getCharacters } from '../services/charactersService';

export const Card = ({image,description,setCounter,counter}) => {

  // const [counter, setCounter] = useState(0);
  const [id, setId] = useState(1);

  const increment = () => {
    setCounter(counter+1);
  };

  const response = useMemo(() => {
    console.log('get character');
    return getCharacters();
  },[id]);
  console.log('render la card XD');

  return (
    <div>
      <img src={image} alt='Card'/>
      <div>
        {description}
      </div>
      <button onClick={increment}>incrementar</button>
    </div>
  );
};
