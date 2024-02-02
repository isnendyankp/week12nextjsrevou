import React, { useEffect, useState } from 'react';
import { PokemonListData } from '../../interfaces/Category';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Text, Button } from '../../components';

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

               // return pokemon data
              return {
                id: pokemonResponse.data.id,
                name: poke.name,
                sprite: pokemonResponse.data.sprites.front_default,
                types,
                abilities,
              };
            
            });
          );
          
          // set pokemon data
           setPokemon(pokeData);
      } catch (error) {
        console.error('Error fetching Pokemon:', error);
      }
    };

    fetchPokemon();
  }, []);

  // return pokemon list
  return (
     <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen px-6">
     {/* title pokemon list */}
      <h1 className="text-4xl mb-4">
        <Text>Pokemon List</Text>
      </h1>
      {/* button pokemon search */}
      <Button
        onClick={() => router.push('/pokemon/search')}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      />
      {/* pokemon list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pokemon.map((poke) => (
          <div
            key={poke.id}
            className="flex flex-col items-center bg-blue-200 border-blue-500 border-solid border-2 p-2 my-2 rounded-md w-64"
          >
            <div className="mb-2">
              <p className="text-lg font-semibold">{poke.name}</p>
              <p>ID: {poke.id}</p>
              <p>Types: {poke.types.join(', ')}</p>
              <p>Abilities: {poke.abilities.join(', ')}</p>
            </div>
            <img src={poke.sprite} alt={poke.name} />
          </div>
        ))}
      </div>
     </div>
  )
};

export default PokemonListContainer;
