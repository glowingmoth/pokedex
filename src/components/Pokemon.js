import { useEffect, useState } from "react";
import numberFormat from "../utils/numberFormat";
import { pokemonDetails } from "../pokemonDetails";
import Types from "./Types";

import "./pokemon.css";

const Pokemon = ({ pokemonNameAndUrl }) => {
  const list = pokemonNameAndUrl;
  const [pokemon, setPokemon] = useState([]);

  let pokemonList = [];
  useEffect(() => {
    list?.forEach((item) => {
      fetch(item.url)
        .then((response) => response.json())
        .then((data) => {
          let id = data.id;
          let types = data.types;
          let name = data.name;
          let image = data.sprites.front_default;
          pokemonList.push({ id, types, name, image });
          if (pokemonList.length === 151) {
            setPokemon(pokemonList);
            // console.log(pokemon)
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
    let thisTypes = []
    return (
      <li key={id} className="container">
        <div className="thumbnail-container">
          <img className="image" src={image} />
          <div className='thumbnail-details'>
            <p className="id">{`${numberFormat(id)}`}</p>
            <h2 className="name">{name}</h2>
          </div>
          {
            types.forEach(pokemon => {
              if (pokemon.name === name) {
                thisTypes.push({name: pokemon.name, type1: pokemon.type1, type2: pokemon.type2})
              }
            })
          }
        <Types types={thisTypes}/>
        </div>
        {/* <p>{pokemonDetails[id - 1].details}</p> */}
      </li>
    );
  });

  return (
    <div className="pokemon-list">
      <ul>
        {pokemons}
      </ul>
    </div>
  );
};

export default Pokemon;
