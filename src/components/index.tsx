import { ReactNode, useMemo } from 'react';


interface Props {
    children: ReactNode;
    justifyContent?: 'start' | 'center' | 'end';
    display?: 'flex' | 'block';
}

const Card = ({ children, justifyContent = 'start'} : Props) => {

    // cr8 a style obj(justityContentStyled) to hold the styles for the card component
    const justifyContentStyled = useMemo(
       () => {
        if (justifyContent === 'start') {
            return style.justifyLeft
        }
        if (justifyContent === 'center') {
            return style.justifyCenter
        }

        return style.justifyRight
       }
    );  
}

export default Card;