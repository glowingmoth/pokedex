import {useState, useEffect} from 'react'

import Pokemon from './components/Pokemon';
import './global.css'

function App() {
  const [data, setData] = useState([])
  // ?limit=60&offset=60
  const [limit, setLimit] = useState(5)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then(response => response.json())
      .then(data => setData(data.results))
  }, [limit]) // CURRENTLY WORKING ON THE LOAD MORE FEATURE

  const loadMore = () => {
    // setOffset(limit)
    setLimit(limit + 5)
    setOffset(limit)
    console.log({limit, offset})
  }

  console.log('data in App', data)
  return (
    <div className='pokedex-container'>
      <h1>Pokédex</h1>
      <Pokemon pokemonNameAndUrl={data} />
      <button style={{marginTop: '100px'}} onClick={loadMore}>Load More</button>
    </div>
  );
}

export default App;
