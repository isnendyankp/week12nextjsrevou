// register page as a Home page

import { useFormik } from 'formik';
import { useRouter } from 'next/router';

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
      email: yup.string().email('Invalid email address').required('Required'),
      name: yup.string().required('Required'),
      password: yup.string().required('Required'),
    
    }),
  });
  
  return (
    <div>
      {' ini adalah halaman utama '}
    </div>
  );
};

export default Home;
