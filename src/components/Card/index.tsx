import styled from "styled-components";
import { CSSProperties, ReactNode } from "react"

interface Props {
    children: ReactNode;
    display?: CSSProperties['display'];
    className?: string;
    direction?: CSSProperties['flexDirection'];
    wrap?: CSSProperties['flexWrap'];
}

// Basecard
const BaseCard = styled.div<Props>`
  display: ${(props) => props.display} !important;
  flex-direction: ${(props) => props.direction} !important;
  flex-wrap: ${(props) => props.wrap};
`;

const Card = ({ children, display = 'flex', direction = 'row',  className, wrap = 'wrap' } : Props) => {
    return (
        <BaseCard display={display} className={className} direction={direction} wrap={wrap}>
            {children}
        </BaseCard>
    )
};

export default Card;