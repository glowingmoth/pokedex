import {useEffect} from 'react'

function App() {
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => response.json())
    .then(data => console.log(data))
  }, [])

  return (
    <div>
      <h1>Pokédex</h1>
    </div>
  );
}

export default App;
