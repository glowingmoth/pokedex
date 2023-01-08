import {useState, useEffect} from 'react'

import Pokemon from './components/Pokemon';
import './global.css'
import useFetch from './helpers/useFetch'

function App() {
  const [pokemonMetaData, setPokemonMetaData] = useState([])

  // ?limit=60&offset=60
  const [limit, setLimit] = useState(5)
  const [offset, setOffset] = useState(0)
  const {data} = useFetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)

  useEffect(() => {
    setPokemonMetaData(data.results)
  }, [data, limit])

  return (
    <div className='pokedex-container'>
        <h1>Pokédex</h1>
      <div className="pokemon-list">
        {pokemonMetaData?.map((data, index) => {
          return <Pokemon key={index} nameAndUrl={data} />
        })}
      </div>
    </div>
  );
}

export default App;
