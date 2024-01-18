import { useSearchParams } from "next/navigation";

const AuthIndex = () => {

    const searchParams = useSearchParams();

    const sign = searchParams.get('sign');

    const email = searchParams.get('email');

    return (
        <div>
            {/* url query string */}
            {/* kalo sign dan email ada, tampilkan halaman sign dan email, kalo tidak tampilkan halaman auth = ini adalah halaman auth */}
            {sign && email ? `ini adalah halaman sign ${sign} dan ${email}` : 'ini adalah halaman auth'}
        </div>
    );
}

export default AuthIndex;

// note:
// sign dan email adalah query params yang bisa diakses dari url dengan cara: localhost:3000/auth/?sign={token}&email={email} -> ini adalah halaman sign {token} dan {email}. minsal url 