import { useRouter } from 'next/router';

const Login = () => {
  // use Navigate router hook
  const router = useRouter();

  // interface for form props
  interface FormProps {
    email: string;
    password: string;
  }

  return <div>{' ini adalah halaman Login '}</div>;
};

export default Login;
