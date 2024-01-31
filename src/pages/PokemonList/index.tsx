import React, { useEffect, useState } from 'react';
import { PokemonListData } from '../../interfaces/Category';
import { useRouter } from 'next/router';

const PokemonListContainer: React.FC = () => {
  // useState hook
  const [pokemon, setPokemon] = useState<PokemonListData[]>([]);

  // use Navigate router hook
  const router = useRouter();

  // useEffect hook
  useEffect(() => {
    const fetchPokemon = async () => {
        try {
          // fetch pokemon list from API
          const response = await axios.get(
            'https://pokeapi.co/api/v2/pokemon?limit=61'
          );

          
        } catch (error) {
          console.error('Error fetching Pokemon:', error);
        }
    };
  }, []);
};

export default PokemonListContainer;
