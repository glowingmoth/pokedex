import { useEffect, useState } from "react";
import numberFormat from "../utils/numberFormat";
import { pokemonDetails } from "../pokemonDetails";
import Types from "./Types";
import Pokeball from "./Pokeball";
import Pagination from '@mui/material/Pagination';

import "./pokemon.css";

const Pokemon = ({ pokemonNameAndUrl }) => {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let tempList = [];
    pokemonNameAndUrl?.forEach((item) => { // These are all iterated in the correct order
      fetch(item.url)
        .then((response) => response.json()) // The responses are NOT in the correct order
        .then((data) => { // id's are coming through in any order
          tempList.push(
            {
              id: data.id,
              types: data.types,
              name: data.name,
              image: data.sprites.other['official-artwork'].front_default
            }
          );

          if (tempList.length === 5) {
            setPokemon(tempList)
            setIsLoading(false)
          }
        });
    });
  }, [pokemonNameAndUrl]);

  let types = [];

  if (pokemon.length > 0) {
    for (let i = 0; i < pokemon.length; i++) {
      // if (pokemon[i].id < pokemon[i + 1].id) {
      //   let tempA = pokemon[i]
      //   let tempB = pokemon[i + 1]
      //   pokemon[i] = tempB
      //   pokemon[i + 1] = tempA
      // }
    }
  }

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
        </div>
        <div className='details'>
            <div className='thumbnail-details'>
              <p className="id">{`${numberFormat(id)}`}</p>
              <h2 className="name">{name}</h2>
            </div>
            {
              types.forEach(pokemon => { // This is where I build the types array for easier processing
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
        {isLoading ? <Pokeball /> : pokemons}
      </ul>
        <Pagination count={10} variant="outlined" shape="rounded"/>
    </div>
  );
};

export default Pokemon;
