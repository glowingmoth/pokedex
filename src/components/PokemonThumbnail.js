import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import numberFormat from "../utils/numberFormat";
import Types from "./Types";
import Pokeball from "./Pokeball";

import "./pokemon.css";
import PokemonInfo from "./PokemonInfo";

const Pokemon = ({ pokemonNameAndUrl }) => {
  const list = pokemonNameAndUrl;
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      <li key={id} className="container">
        <Link className="react-router-link" to={name}>
          <div className="thumbnail-container">
            <img className="image" src={image} />
            <div className="thumbnail-details">
              <p className="id">{`${numberFormat(id)}`}</p>
              <h2 className="name">{name}</h2>
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
        </Link>
      </li>
    );
  });

  return (
    <div className="pokemon-list">
      <ul>{isLoading ? <Pokeball /> : pokemons}</ul>
    </div>
  );
};

export default Pokemon;
