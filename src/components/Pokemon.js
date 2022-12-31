import { useEffect, useState } from "react";
import numberFormat from "../utils/numberFormat";
import { pokemonDetails } from "../pokemonDetails";
import Types from "./Types";
import Pokeball from "./Pokeball";
import Pagination from './Pagination'

import "./pokemon.css";

const Pokemon = ({ pokemonNameAndUrl }) => {
  console.log('props in order? ', pokemonNameAndUrl) // Yes in order!
  const list = pokemonNameAndUrl;
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

    console.log('list', list) // Yes in order!
  let pokemonList = [];
  useEffect(() => {
    console.log('inside useeffect', list)
    list?.forEach((item) => {
      fetch(item.url)
        .then((response) => response.json())
        .then((data) => {
          let id = data.id;
          let types = data.types;
          let name = data.name;
          let image = data.sprites.other['official-artwork'].front_default;
          console.log({ id, types, name, image })
          pokemonList.push({ id, types, name, image });
          for (let i = 0; i < pokemonList.length; i++) {
            if (pokemonList[i] > pokemonList[i + 1]) {
              let tempA = pokemonList[i]
              let tempB = pokemonList[i + 1]
              pokemonList[i] = tempB
              pokemonList[i + 1] = tempA
            }
          }

          if (pokemonList.length === 5) {
            setPokemon(pokemonList);
            setIsLoading(false)
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

  console.log('pokemon before becoming pokemons', pokemon) // Not in order

  let pokemons = pokemon.map(({ id, name, image }) => {
    let thisTypes = []
    return (
      <li key={id} className="container">
        <div className="thumbnail-container">
          <img className="image" src={image} />
        </div>
        <div className='details'>
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

  console.log('pokemons in Pokemon', pokemons)

  return (
    <div className="pokemon-list">
      <ul>
        {isLoading ? <Pokeball /> : pokemons}
      </ul>
      <Pagination />
    </div>
  );
};

export default Pokemon;
