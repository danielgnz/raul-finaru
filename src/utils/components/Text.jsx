import React from 'react';
import styled, {css} from 'styled-components';

const textStyle = css`
    ${({align}) => align && `text-align: ${align};`}
    ${({size}) => size && `font-size: ${size}%;`}
    ${({spacing}) => `letter-spacing: ${spacing ? spacing : `0.05`}em;`}
    ${({color}) => `color: ${color ? color : `#fff`};`}
    ${({padding}) => padding && `padding: ${padding}rem;`}
    ${({weight}) => weight && `font-weight: ${weight};`}
    ${({uppercase}) => uppercase && `text-transform: uppercase;`}
`;

export const Text = ({children, variant, ...otherProps}) => {
    const Element = variant ? styled(variant)`${textStyle}` : styled.p`${textStyle}`;

    return <Element {...otherProps}>{children}</Element>
}

export default Text;