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
          
           // fetch pokemon data from API
          const pokeData: PokemonListData[] = await Promise.all(
            response.data.results.map(async (poke: { name: string }) => {
              // fetch pokemon data from API
              const pokemonResponse = await axios.get(
              `https://pokeapi.co/api/v2/pokemon/${poke.name}`
              );

              // response.data.abilities is an array of objects
              const abilities = pokemonResponse.data.abilities.map(
                (ability: { ability: { name: string } }) => ability.ability.name
              );

              // response.data.types is an array of objects
              const types = pokemonResponse.data.types.map(
                (type: { type: { name: string } }) => type.type.name
              );
            
            });
          );
          
        } catch (error) {
          console.error('Error fetching Pokemon:', error);
        }
    };
  }, []);
};

export default PokemonListContainer;
