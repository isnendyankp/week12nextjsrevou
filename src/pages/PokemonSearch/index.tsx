import React,{ useState } from 'react'
import { PokemonSearchData } from '../../interfaces/Category';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthContext';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const PokemonSearchContainer: React.FC = () => {
  // useState hook
  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState<PokemonSearchData | null>(null);

  // use Navigate router hook
  const router = useRouter();

  // useAuth hook
  const { isAuthenticated } = useAuth();

  // useFormik hook
  const formik = useFormik({
    initialValues: {
      search: '',
    },

    // validationSchema for form validation
    validationSchema: yup.object({
      search: yup.string().required('Search cannot be empty'),
    }),

    // onSubmit function for form submission
    onSubmit: async (values) => {
      if (isAuthenticated) {
        setSearch(values.search);
      } else {
        router.push('/login');
      }
    },
  });

  //  searchPokemon function
  const searchPokemon = async () => {
    try {
      // fetch pokemon list from API
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000`
      );

      // find pokemon from API response
      const foundPokemon = response.data.results.find(
        (poke: { name: string }) => poke.name.includes(search.toLowerCase())
      );
      // if pokemon found, fetch pokemon details
      if (foundPokemon) {
        const pokemonResponse = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${foundPokemon.name}`
        );
        // setPokemon state with pokemon data from API response
        setPokemon({
          name: pokemonResponse.data.name,
          sprites: pokemonResponse.data.sprites,
          types: pokemonResponse.data.types,
          abilities: pokemonResponse.data.abilities,
        });
        // if pokemon not found, setPokemon state to null
      } else {
        setPokemon(null);
      }
      // if error, log error to console and setPokemon state to null
    } catch (error) {
      console.error('Error: Pokemon not found');
      setPokemon(null);
    }
  };

  return <div>index</div>;
};

export default PokemonSearchContainer;