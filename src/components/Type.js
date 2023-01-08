import React, {useEffect, useState} from "react";
import findColour from "../helpers/findColour.js";

export default function Type ({ name }) {
  const [typeName, setTypeName] = useState(null)

  useEffect(() => {
    setTypeName(name)
  }, [name])

  return ( <div className="type" style={findColour(name)}>{typeName}</div> );
};
