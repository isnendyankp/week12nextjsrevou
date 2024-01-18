import { ReactNode } from 'react';


interface Props {
    children: ReactNode;
    justifyContent?: 'start' | 'center' | 'end';
    display?: 'flex' | 'block';
}

const Card = ({ children, justifyContent = 'start'} : Props) => {
}

export default Card;