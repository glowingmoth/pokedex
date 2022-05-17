import { useEffect, useState } from "react"
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
                if (pokemonList.length === 20) {
                    setPokemon(pokemonList)
                    console.log(pokemon)
                }
            })
        })
    }, [list])

    let pokemons = pokemon.map(({id, types, name, image}) => {
        return (
            
                <div className="container">
                    <img className="image" src={image}/>
                    <h1>{name}</h1>
                    <h3>{id}</h3>
                    {types.map(types => <p>{types.type.name}</p>)}
                </div>
            
        ) 
    })

    return (
        <div>
            <ul>{pokemons}</ul>
        </div>
    )
        
}

export default Pokemon