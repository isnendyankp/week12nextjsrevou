import { useRouter } from "next/router";

const AuthToken = () => {

    const router = useRouter();
    
  return (
    <div>
        {`ini adalah halaman token dengan token: ${router.query.token}`}
    </div>
  );
};

export default AuthToken;
