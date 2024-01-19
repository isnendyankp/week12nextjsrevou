import styled from "styled-components";
import { CSSProperties, ReactNode } from "react"

interface Props {
    children: ReactNode;
    display?: CSSProperties['display'];
    className?: string;
}

const BaseCard = styled.div`

`;

const Card = ({ children, display, className } : Props) => {
    return (
        <BaseCard>
            {children}
        </BaseCard>
    )
};

export default Card;