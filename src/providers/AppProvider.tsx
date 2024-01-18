import { createContext } from 'react';

// interface User
interface User {
    name: string;
    email: string;
}

// interface Props
interface Props {
    children: React.ReactNode;
}

// cr8 context with using function createContext
export const AppContext = createContext(undefined);

// cr8 AppProvider function

const AppProvider = ({ children }) => {

};