import React,{ useState } from 'react'
import { PokemonSearchData } from '../../interfaces/Category';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthContext';
import { useFormik } from 'formik';
import * as yup from 'yup';

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
    } catch (error) {
      console.log('error', error);
    }
  };

  return <div>index</div>;
};

export default PokemonSearchContainer;