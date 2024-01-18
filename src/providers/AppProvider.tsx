import React, { ReactNode, createContext, useState } from 'react';

// interface User
interface User {
    name: string;
    email: string;
}

// interface Props
interface Props {
    children: ReactNode;
}

// interface Context
interface Context {
    user?: User;
    setUser?: React.Dispatch<React.SetStateAction<User | undefined>>;
}

// cr8 defaultValue with using interface Context
const defaultValue: Context = {
    user: undefined,
    setUser: undefined,
};

// cr8 context with using function createContext
export const AppContext = createContext(undefined);

// cr8 AppProvider function

const AppProvider = ({ children } : Props) => {
    const [user, setUser] = useState<User>();
};