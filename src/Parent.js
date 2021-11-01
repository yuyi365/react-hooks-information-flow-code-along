import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor); // initial value for color state
  const [childrenColor, setChildrenColor] = useState("FFF");

  const handleChangeColor = (newChildColor) => {
    // const newRandomColor = getRandomColor();
    setColor(getRandomColor()); // update color state to a new value
    setChildrenColor(newChildColor);
  }
 
  // pass color change to child elements
  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childrenColor} onChangeColor={handleChangeColor} /> 
      <Child color={childrenColor} onChangeColor={handleChangeColor}/>
    </div>
  );
}

export default Parent;
