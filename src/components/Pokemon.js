import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import numberFormat from "../helpers/numberFormat";
import "./pokemon.css";
import Types from './Types'
import useFetch from '../helpers/useFetch';


export default function Pokemon ({ nameAndUrl }) {
  const [pokemon, setPokemon] = useState([]);
  const {data} = useFetch(nameAndUrl.url)

  useEffect(() => {
    setPokemon(data)
  }, [data])

  return ( <div>
    <ul>
      <Link to={`/${pokemon.id}`}>
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
      </li>
      </Link>
    </ul>
    </div>
  );
};
