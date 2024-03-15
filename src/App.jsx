import { useRef,useEffect } from "react";

import React from "react";
import Main from "./assets/Main";
import Navbar from "./assets/Navbar";
import Secnav from "./assets/Secnav";

function App() {

  let heroParts = [
    {
      modelName: "Y",
      imgSrc: "Images/Y.jpeg" 
    },
    {
      modelName: "2015 Larte",
      imgSrc: "Images/2015Larte.jpg" 
    },
    {
      modelName: "Roadster",
      imgSrc: "Images/Roadster.jpg" 
    },
    {
      modelName: "S",
      imgSrc: "Images/S.jpg" 
    },
    {
      modelName: "S2",
      imgSrc: "Images/S2.jpg" 
    },
    {
      modelName: "SP90D",
      imgSrc: "Images/SP90D.jpg" 
    }
  ];



  return (
    <>
      <Navbar />
      <Secnav />
      {heroParts.map((heroPart, index) => {
        return <Main key={index} model={heroPart.modelName} imgSrc={heroPart.imgSrc} />;
      })}
    </>
  );
}

export default App;
