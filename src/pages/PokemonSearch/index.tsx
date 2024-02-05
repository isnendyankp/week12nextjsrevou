import React,{ useState } from 'react'
import { PokemonSearchData } from '../../interfaces/Category';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthContext';
import { useFormik } from 'formik';

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

  return <div>index</div>;
};

export default PokemonSearchContainer;