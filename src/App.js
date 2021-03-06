import {useState, useEffect} from 'react'

import Pokemon from './components/Pokemon';
import './global.css'

function App() {
  const [data, setData] = useState([])
  // ?limit=60&offset=60
  const [limit, setLimit] = useState(151)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then(response => response.json())
      .then(data => setData(data.results))
  }, [])

  return (
    <div className='pokedex-container'>
      <h1>Pokédex</h1>
      <Pokemon pokemonNameAndUrl={data} />
    </div>
  );
}

export default App;
