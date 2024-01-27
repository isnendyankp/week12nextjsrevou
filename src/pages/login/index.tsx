import { useRouter } from 'next/router';

const Login = () => {
  // use Navigate router hook
  const router = useRouter();

  // interface for form props
  interface FormProps {
    email: string;
    password: string;
  }

    // useFormik hook
  const formMik = useFormik<FormProps>({
    initialValues: {
      email: '',
      password: '',
    },

    // onSubmit function for login form
    onSubmit: async (values) => {
      try {
        const response = await fetch(
          'https://mock-api.arikmpt.com/api/user/login',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          // if response is ok, you can use it here
          const data = await response.json();
          // set token to local storage
          localStorage.setItem('token', data.data.token);
          console.log(data);
          // navigate to list page
          router.push('/PokemonList');
        }
      } catch (error) {
        // catch any network error or any error thrown in the fetch call
        console.log(
          'There has been a problem with your fetch operation: ' +
            (error as Error).message
        );
      }
    },

    // validation for username, email & password
    validationSchema: yup.object({
      // name: yup.string().required('name tidak boleh kosong'),
      email: yup
        .string()
        .email('Email tidak valid')
        .required('Email tidak boleh kosong'),
      password: yup
        .string()
        .min(8, 'Password minimal 8 karakter')
        .required('Password tidak boleh kosong'),
    }),
  });


  return <div>{' ini adalah halaman Login '}</div>;
};

export default Login;
