import React, { useState } from 'react';
import { PokemonListData } from '../../interfaces/Category';


const PokemonListContainer: React.FC = () => {
  // useState hook
  const [pokemon, setPokemon] = useState<PokemonListData[]>([]);

  // use Navigate router hook
  const router = useRouter();
}

export default PokemonListContainer;