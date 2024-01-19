import styled from "styled-components";
import { CSSProperties, ReactNode } from "react"

interface Props {
    children: ReactNode;
    display?: CSSProperties['display'];
    className?: string;
    direction?: CSSProperties['flexDirection'];
}

// Basecard
const BaseCard = styled.div<Props>`
    display: !${(props) => props.display};
    flex-direction: !${(props) => props.direction};
`;

const Card = ({ children, display = 'flex', direction = 'row',  className } : Props) => {
    return (
        <BaseCard display={display} className={className} direction={direction}>
            {children}
        </BaseCard>
    )
};

export default Card;