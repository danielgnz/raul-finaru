import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SmallDivider = styled.span`
    width: 25%;
    border: .5px solid #7f6631;
`;

export const ButtonLink = styled(Link)`
    display: table;
    background-color: #fff;
    border: 2px solid #6d0308;
    height: 40px;
    position: relative;
    text-align: center;
    transform: rotate(45deg);
    width: 40px;

    &:hover {
        background-color: #6d0308;
        
    }
`;

export const RightArrow = styled.span`
    color: #6d0308;
    position: absolute;
    transform: rotate(-45deg);
    font-weight: 600;
    left: 5%;
    height: 50%;
    top: -2%;

    ${ButtonLink}:hover & {
        color: #fff;
    }
`;

export const TextLink = styled(Link)`
    color: #6d0308;
    font-size: 55%;
    font-weight: 500;
    text-decoration: none;
`;