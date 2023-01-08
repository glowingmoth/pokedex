import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import numberFormat from "../utils/numberFormat";
import Pokeball from "./Pokeball";
import { pokemonDetails } from "../pokemonDetails";
import Types from "./Types";
import "./pokemon-info.css";


export default function PokemonInfo ({ pokemonNameAndUrl }) {
  const list = pokemonNameAndUrl;
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { id } = useParams();

  let pokemonList = [];
  useEffect(() => {
    list?.forEach((item) => {
      fetch(item.url)
        .then((response) => response.json())
        .then((data) => {
          let id = data.id;
          let types = data.types;
          let name = data.name;
          let image = data.sprites.other["official-artwork"].front_default;
          pokemonList.push({ id, types, name, image });
          if (pokemonList.length === 151) {
            setPokemon(pokemonList);
            setIsLoading(false);
          }
        });
    });
  }, [list]);

  let types = [];

  pokemon.forEach((pokemon) => {
    types.push({
      name: pokemon.name,
      type1: pokemon.types[0].type.name,
      type2: pokemon.types[1]?.type.name,
    });
  });

  let pokemons = pokemon.map(({ id, name, image }) => {
    let thisTypes = [];
    return (
      <li key={id}>
          <div>
            <img src={image} />
            <div>
              <p>{`${numberFormat(id)}`}</p>
              <h2>{name}</h2>
            </div>
            {types.forEach((pokemon) => {
              if (pokemon.name === name) {
                thisTypes.push({
                  name: pokemon.name,
                  type1: pokemon.type1,
                  type2: pokemon.type2,
                });
              }
            })}
            <Types types={thisTypes} />
          </div>
      </li>
    );
  });

  return (
    <div className="pokemon-info">
      {pokemons}
      <p>{pokemonDetails[id - 1].details}</p>
      {/* {isLoading ? <Pokeball /> : pokemonDetails} */}
    </div>
  );
};
