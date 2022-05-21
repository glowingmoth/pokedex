import { useEffect, useState } from "react"
import numberFormat from '../utils/numberFormat'
// import { pokemonDetails } from "../pokemonDetails"

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
                    console.log(pokemon)
                }
            })
        })
    }, [list])

    let pokemons = pokemon.map(({id, types, name, image}) => {
        return (
            <li key={id} className="container">
                {/* <img className="image" src={image}/> */}
                <h2 className="name">{name}</h2>
                <p className="id">{`${numberFormat(id)}`}</p>
                {/* <div className="types"> */}
                    {/* {types.map(types => <p>{types.type.name}</p>)} */}
                {/* </div> */}
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