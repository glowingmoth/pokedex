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
  }, [limit])

  return (
    <div className='pokedex-container'>
        <h1>Pokédex</h1>
      <div className="pokemon-list">
        {data.map((data, index) => {
          return <Pokemon key={index} nameAndUrl={data} />
        })}
      </div>
    </div>
  );
}

export default App;
