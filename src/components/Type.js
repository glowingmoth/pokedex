import React from "react";
import findColour from "../utils/colourFinder.js";

const Type = ({ types }) => {
  console.log('Type called')
  // At this point it's an array of either 1 or 2 strings in lower case
// console.log('inside type', types)
  return (
    <div className="type" style={findColour(types)}>
      {types[0]} {/* This is actually the type name*/}
    </div>
  );
};

export default Type;
