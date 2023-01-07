import {useState, useEffect} from 'react'

// import Pokemon from './components/Pokemon';
import Test from './Test';
import './global.css'

function App() {
  const [data, setData] = useState([])
  // ?limit=60&offset=60
  const [limit, setLimit] = useState(200)
  const [offset, setOffset] = useState(151)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then(response => response.json())
      .then(data => setData(data.results))
  }, [limit]) // CURRENTLY WORKING ON THE LOAD MORE FEATURE

  return (
    <div className='pokedex-container'>
        <h1>Pokédex</h1>
      <div className="pokemon-list">
        {/* <Pokemon pokemonNameAndUrl={data} /> */}
        {data.map((data, index) => {
          return <Test key={index} nameAndUrl={data} />
        })}
      </div>
    </div>
  );
}

export default App;
