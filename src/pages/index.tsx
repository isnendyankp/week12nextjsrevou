// register page as a Home page

import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import { Card } from '../components';

const Home = () => {
  // use router
  const router = useRouter();

  // interface for email, name, and password
  interface FormProps {
    email: string;
    name: string;
    password: string;
  }

  // formik hook
  const formMik = useFormik<FormProps>({
    initialValues: {
      email: '',
      name: '',
      password: '',
    },

    // submit function
    onSubmit: async (values) => {
      // fetch data from the API
      await fetch('https://mock-api.arikmpt.com/api/user/register', {
        method: 'POST',
        // headers for the API request
        headers: {
          'Content-Type': 'application/json',
        },
        // body for the API request
        body: JSON.stringify(values),
      });

      router.push('/Login');
    },

    // validation schema
    validationSchema: yup.object({
      name: yup.string().required('Name tidak boleh kosong'),
      email: yup
        .string()
        .email('Email harus valid')
        .required('Email tidak boleh kosong'),
      password: yup
        .string()
        .min(8, 'Password harus setidaknya berisi 8 karakter')
        .required('Password tidak boleh kosong'),
    }),
  });
  
  return (
    // add card
    <Card border={false} className="flex justify-center items-center">
      {/* card for wrap */}
      <Card
        border
        className="p-6 rounded-lg border-emerald-500 shadow-lg w-1/2"
      >
        <div>{' ini adalah halaman utama '}</div>
      </Card>
    </Card>
  );
};

export default Home;
