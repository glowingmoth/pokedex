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
            let name = data.name
            let image = data.sprites.front_default
            pokemonList.push({name: name, image: image})
            if (pokemonList === 10 ) {
                setPokemon(pokemonList)
            }
            console.log(pokemon)
        })
    })
}, [list])

    let critter = pokemon.map(pokemon => {
        return <li>{pokemon.name}<img src={pokemon.image}/></li>
    })

    return (
        <div>
            <ul>{critter}</ul>
        </div>
    )
        
}

export default Pokemon