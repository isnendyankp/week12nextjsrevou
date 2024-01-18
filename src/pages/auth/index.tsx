import { useSearchParams } from "next/navigation";

const AuthIndex = () => {

    const searchParams = useSearchParams();

    const sign = searchParams.get('sign');

    return (
        <div>
            {' ini adalah halaman auth '}
        </div>
    );
}

export default AuthIndex;