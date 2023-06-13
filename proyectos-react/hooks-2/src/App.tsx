import React, { useState } from 'react'
import { Card } from './components/Card';
import { Header } from './components/Header';

export const App = () => {

  const [click,setClick] = useState(false);
  const [counterOne,setCounterOne] = useState(0);
  const [counterTwo,setCounterTwo] = useState(0);
  const [counterThree,setCounterThree] = useState(0);

  return (
    <>
      <Header text='Y nose si volveraaaaaa'/>
      <Card
      image={'https://rickandmortyapi.com/api/character/avatar/21.jpeg'}
      description={'hola mundo XD'}
      setCounter={setCounterOne} 
      counter={counterOne}
      />
      <Card
      image={'https://rickandmortyapi.com/api/character/avatar/22.jpeg'}
      description={'hola mundo XD - 2'}
      setCounter={setCounterTwo}
      counter={counterTwo}
      />
      <Card
      image={'https://rickandmortyapi.com/api/character/avatar/23.jpeg'}
      description={'hola mundo XD - 3'}
      setCounter={setCounterThree}
      counter={counterThree}
      />
      <button onClick={() => setClick(!click)}>CLICK</button>
    </>
  );
};
