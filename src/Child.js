/*
  - sibling components cannot pass data to each other directly
  - data can only flow up and down between parent and child
  - child can't pass to another child
*/

import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

const Child = ({ onChangeColor, color }) => {
  
  const handleClick = () => {
    const newColor = getRandomColor();
    onChangeColor(newColor);
  }
  
  return (
    <div 
    onClick={handleClick} // determines what function to run on click
    className="child" 
    style={{backgroundColor: color}}>
    </div>
  )
}

export default Child

