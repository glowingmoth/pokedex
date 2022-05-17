import { useEffect, useState } from "react"

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

    let pokemons = pokemon.map(pokemon => {
        return <li style={{listStyleType: 'none'}}>
            <img src={pokemon.image}/><span><h1 style={{display: 'inline'}}>{pokemon.name}</h1></span>
        </li>
    })

    return (
        <div>
            <ul>{pokemons}</ul>
        </div>
    )
        
}

export default Pokemon