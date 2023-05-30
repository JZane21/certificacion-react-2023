import { useState } from "react";
import { Background } from "./Background";
import { ColorButton } from "./ColorButton";

const listaColor = ['red','blue','black']

export const Page = () => {
  const [bgColor,setBgColor] = useState('transparent');
  return (
    <section>
      <Background bgColor={bgColor}/>
      <div style={{display:'flex', flex:'row', justifyContent:"center"}}>
      {listaColor.map(i => (
        <ColorButton
        tipo={i}
        setBgColor={setBgColor}
        />
      ))}
      </div>
    </section>
  );
};
