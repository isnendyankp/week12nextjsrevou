import React,{ useState } from 'react'
import { PokemonSearchData } from '../../interfaces/Category';
import { useRouter } from 'next/router';

const PokemonSearchContainer: React.FC = () => {
  // useState hook
  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState<PokemonSearchData | null>(null);

  // use Navigate router hook
  const router = useRouter();

  return <div>index</div>;
};

export default PokemonSearchContainer;