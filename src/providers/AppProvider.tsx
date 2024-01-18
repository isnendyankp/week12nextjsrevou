import { createContext } from 'react';

// interface User
interface User {
    name: string;
    email: string;
}

// 
export const AppContext = createContext(undefined);