import { useEffect, useState } from 'react'
import numberFormat from '../utils/numberFormat'
import { pokemonDetails } from '../pokemonDetails'
import Types from './Types'

import './pokemon.css'

const Pokemon = ({pokemonNameAndUrl}) => {
    const list = pokemonNameAndUrl
    const [pokemon, setPokemon] = useState([])

    let pokemonList = []
    useEffect(() => {
        list?.forEach((item) => {
            fetch(item.url)
            .then(response => response.json())
            .then(data => {
                let id = data.id
                let types = data.types
                let name = data.name
                let image = data.sprites.front_default
                pokemonList.push({id, types, name, image})
                if (pokemonList.length === 151) {
                    setPokemon(pokemonList)
                    // console.log(pokemon)
                }
            })
        })
    }, [list])

    let types = []

    pokemon.forEach(pokemon => {
        types.push({name: pokemon.name, type1: pokemon.types[0].type.name, type2: pokemon.types[1]?.type.name})
    })

    let pokemons = pokemon.map(({id, name, image}) => {
        return (
            <li key={id} className="container">
                <img className="image" src={image}/>
                <h2 className="name">{name}</h2>
                <p className="id">{`${numberFormat(id)}`}</p>
                <p>{pokemonDetails[id - 1].details}</p>
                <Types types={types} />
            </li>
        )
    })


    return (
        <div>

            <ul>{pokemons}</ul>
        </div>
    )

}

export default Pokemon