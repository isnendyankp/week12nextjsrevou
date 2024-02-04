import React,{ useState } from 'react'
import { PokemonSearchData } from '../../interfaces/Category';

const PokemonSearchContainer: React.FC = () => {
  // useState hook
  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState<PokemonSearchData | null>(null);
  return <div>index</div>;
};

export default PokemonSearchContainer;