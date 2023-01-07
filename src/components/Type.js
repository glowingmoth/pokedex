import React, {useEffect, useState} from "react";
import findColour from "../utils/findColour.js";

const Type = ({ name }) => {
  const [typeName, setTypeName] = useState(null)

  useEffect(() => {
    setTypeName(name)
  }, [name])

  return ( <div className="type" style={findColour(name)}>{typeName}</div> );
};

export default Type;
