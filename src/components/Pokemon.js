import React, {useEffect, useState} from 'react'

import numberFormat from "../helpers/numberFormat";
import "./pokemon.css";
import Types from './Types'
import useFetch from '../helpers/useFetch';
// import {pokemonDetails} from '../pokemonDetails'

export default function Pokemon ({ nameAndUrl }) {
  const [pokemon, setPokemon] = useState([]);
  const {data} = useFetch(nameAndUrl.url)

  useEffect(() => {
    setPokemon(data)
    }, [data])

  return ( <div>
    <ul>
      <li className="container">
        <div className="thumbnail-container">
          <img
          className="image"
          src={pokemon.length < 1 ? "Loading" : pokemon.sprites.other['official-artwork'].front_default}
          alt="" />
        </div>
        <div className='details'>
            <div className='thumbnail-details'>
              <p className="id">{numberFormat(pokemon.id)}</p>
              <h2 className="name">{pokemon.name}</h2>
            </div>
            {pokemon.length < 1 ? "Loading" : <Types poke={pokemon}/> }
        </div>
        {/* <p>{pokemonDetails[pokemon.id - 1]?.details}</p> */} {/* TODO: Move to a details page */}
      </li>
    </ul>
    </div>
  );
};
