import React from 'react';
import './App.css';
// import Board from './Board';
import PokemonSearch from './components/PokemonSearch';

function App() {
  return <div>
      <PokemonSearch name='John Smith' />
      <PokemonSearch name='Bruno Mars' numberOfPokemons={2} />
    </div>;
}

export default App;
