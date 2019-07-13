import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Text from '../../utils/components/Text';

export const SmallDivider = styled.span`
    width: 25%;
    border: .5px solid #7f6631;
`;

export const ButtonLink = styled(Link)`
    background-color: #fff;
    border: 2px solid #6d0308;
    height: 40px;
    position: relative;
    text-align: center;
    transform: rotate(45deg);
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #6d0308;
        
    }
`;

export const RightArrow = styled.span`
    color: #6d0308;
    position: absolute;
    transform: rotate(-45deg);
    font-weight: 600;

    ${ButtonLink}:hover & {
        color: #fff;
    }
`;

export const TextLink = styled(Link)`
    color: #6d0308;
    font-size: 55%;
    font-weight: 500;
    text-decoration: none;

    &:hover {
        color: #000;
    }
`;

export const StyledText = styled(Text)`
    @media only screen and (min-width: 768px) {
        width: 75%;
    }
    @media only screen and (min-width: 1024px) {
        width: 50%;
    }
`