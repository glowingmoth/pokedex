import {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PokemonInfo from './components/PokemonInfo';
import PokemonThumbnail from './components/PokemonThumbnail';
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
    <BrowserRouter>
      <div className='pokedex-container'>
        <h1>Pokédex</h1>
        <Routes>
          <Route path='/' element={<PokemonThumbnail pokemonNameAndUrl={data} />} />
          <Route path='/:pokemonName' element={<PokemonInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
