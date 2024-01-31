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
        } catch (error) {
          console.error('Error fetching Pokemon:', error);
        }
    };
  }, []);
};

export default PokemonListContainer;
