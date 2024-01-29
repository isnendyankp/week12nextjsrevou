import React from 'react'

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode; // Tambahkan tipe untuk children
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthContext = () => {
  return (
    <div>AuthContext</div>
  )
}

export default AuthContext