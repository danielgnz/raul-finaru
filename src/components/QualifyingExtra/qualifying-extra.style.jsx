import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    background: #fff;
    color: #000;
`;

export const Title = styled.h1`
    text-align: left;
    font-weight: 600;
    font-size: 70%;
    letter-spacing: .05em;
    line-height: 1.25em;
    text-align: center;
    padding: 1rem;
`;
export const Group = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Item = styled.p`
    font-size: 50%;
    margin-left: 1rem;
`;

export const LinkText = styled(Link)`
    margin-top: 1rem;
    font-size: 50%;
    text-align: center;
    color: #6d0308;
`