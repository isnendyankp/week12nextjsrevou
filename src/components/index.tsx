import { ReactNode, useMemo } from 'react';


interface Props {
    children: ReactNode;
    justifyContent?: 'start' | 'center' | 'end';
    display?: 'flex' | 'block';
}

const Card = ({ children, justifyContent = 'start'} : Props) => {

    const justifyContentStyled = useMemo(
       () => {
        
       }
    );  
}

export default Card;