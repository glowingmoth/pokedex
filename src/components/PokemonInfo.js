import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

import useFetch from '../helpers/useFetch'

export default function PokemonInfo () {
  let {id} = useParams()
  const [pokemon, setPokemon] = useState([]);
  // const {data} = useFetch(nameAndUrl.url)

  // useEffect(() => {
  //   setPokemon(data)
  // }, [data])

  return <div>
    <div>{id}</div>
    HELLO!!!
    {/* <div>{}</div>
    <div>{}</div>
    <div>{}</div> */}
    </div>
}
