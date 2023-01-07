import React, { useEffect, useState } from "react";
import Type from "./Type";
import "./pokemon.css"

const Types = ({ poke }) => {
  const [pokemonTypes, setPokemonTypes] = useState([])

  useEffect(() => {
    setPokemonTypes(poke.types)
  }, [poke])

    return (
      <div>
        {pokemonTypes.length > 0 && pokemonTypes.length > 1 ? (
          <>
            <Type name={pokemonTypes[0]?.type.name} />
            <Type name={pokemonTypes[1]?.type.name} />
          </>
        ) : (
          <Type name={pokemonTypes[0]?.type.name} />
        )}
      </div>
    );
};

export default Types;
