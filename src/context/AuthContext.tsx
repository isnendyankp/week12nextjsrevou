import React from 'react'

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = () => {
  return (
    <div>AuthContext</div>
  )
}

export default AuthContext