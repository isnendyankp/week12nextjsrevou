export default function Home() {

  const context = useContext(AppContext);
  return (
    <div>
      {' ini adalah halaman utama '}
    </div>
  )
}


// Task:
// 1. localhost:3000/auth -> ini adalah halaman auth
// 2. localhost:3000/auth/forgot-password -> ini adalah halaman forgot password
// 3. localhost:3000/auth/reset-password -> ini adalah halaman reset password
// 4. localhost:3000/auth/token-authorization -> ini adalah halaman token authorization
// 5. localhost:3000/auth/{token} -> ini adalah halaman token dengan {token}
// 6. localhost:3000/auth/?sign={token}&email={email} -> ini adalah halaman sign {token} dan {email}