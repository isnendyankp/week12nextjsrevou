import { useSearchParams } from "next/navigation";

const AuthIndex = () => {

    const searchParams = useSearchParams();

    return (
        <div>
            {' ini adalah halaman auth '}
        </div>
    );
}

export default AuthIndex;