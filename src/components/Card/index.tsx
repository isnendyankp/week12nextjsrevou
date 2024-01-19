import styled from "styled-components";
import { CSSProperties, ReactNode } from "react"

interface Props {
    children: ReactNode;
    display?: CSSProperties['display'];
    className?: string;
}

// Basecard
const BaseCard = styled.div<Props>`
    display: ${(props) => props.display};
`;

const Card = ({ children, display = 'flex', className } : Props) => {
    return (
        <BaseCard display={display} className={className}>
            {children}
        </BaseCard>
    )
};

export default Card;