import {useState, useEffect} from 'react'

import Pokemon from './components/Pokemon';

function App() {
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(response => response.json())
      .then(data => setData(data.results))
  }, [])

  return (
    <div>
      <h1>Pokédex</h1>
      <Pokemon pokemonNameAndUrl={data} />
    </div>
  );
}

export default App;
