import React, { useState } from 'react';
import { PokemonListData } from '../../interfaces/Category';
import { useRouter } from 'next/router';


const PokemonListContainer: React.FC = () => {
  // useState hook
  const [pokemon, setPokemon] = useState<PokemonListData[]>([]);

  // use Navigate router hook
  const router = useRouter();

    // useEffect hook
    useEffect(() => {
        
    }, []);
}

export default PokemonListContainer;