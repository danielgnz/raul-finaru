import styled from 'styled-components';

export const Container = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Heading = styled.h2`
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 80%;
    letter-spacing: .1em;
    line-height: 1.25em;
`;

export const Paragraph = styled.p`
    font-size: 54%;
    text-align: left;
    letter-spacing: .05em;
    line-height: 1.5em;
    margin: 1em;
`;

export const Button = styled.button`
    text-transform: uppercase;
    text-align: center;
    padding: .5rem 2rem;
    border-radius: 50px;
    background: #F5CA7B;
    border: none;
    font-size: 55%;
`;