import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import Pokeball from "./Pokeball";
import { pokemonDetails } from "../pokemonDetails";
import "./pokemon-info.css";


const PokemonInfo = () => {
  let { pokemonName } = useParams();
  // const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="pokemon-info">
      {/* <p>{pokemonDetails[id - 1].details}</p> */}
      {pokemonName}
      {/* {isLoading ? <Pokeball /> : pokemonName} */}
    </div>
  );
};

export default PokemonInfo;