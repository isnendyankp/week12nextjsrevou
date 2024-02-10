// Login page as a Home page

import { useFormik } from 'formik';

const Home = () => {

  // interface for email, name, and password
  interface FormProps {
    email: string;
    name: string;
    password: string;
  }

  const formMik = useFormik<FormProps>({
    initialValues: {
      email: '',
      name: '',
      password: '',
    },

  });
  
  return (
    <div>
      {' ini adalah halaman utama '}
    </div>
  );
};

export default Home;
