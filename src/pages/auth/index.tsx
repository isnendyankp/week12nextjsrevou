import { useSearchParams } from "next/navigation";

const AuthIndex = () => {

    const searchParams = useSearchParams();

    const sign = searchParams.get('sign');

    const email = searchParams.get('email');

    return (
        <div>
            {' ini adalah halaman auth '}
        </div>
    );
}

export default AuthIndex;