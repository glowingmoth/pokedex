import React from "react";
import Type from "./Type";

const Types = ({ types }) => {
  // console.log("inside types comp", types); // Array of objects each a pokemon with name and 1 or 2 types

  let pokemonTypes = types.map((pokemon) => {
    return (
      <div key={pokemon.name} className="types">
        {pokemon.type2 ? (
          <>
            <Type name={pokemon.name} types={[pokemon.type1]} />
            <Type name={pokemon.name} types={[pokemon.type2]} />
          </>
        ) : (
          <Type name={pokemon.name} types={[pokemon.type1]} />
        )}
      </div>
    );
  });
  return <div className="types">{pokemonTypes}</div>;
};

export default Types;
