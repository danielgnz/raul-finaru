import styled from 'styled-components';

export const Container = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: #000;
    color: #fff;
`;

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


export const Heading = styled.h2`
    color: #F5CA7B;
    text-align: left;
    font-weight: 600;
    font-size: 70%;
    letter-spacing: .05em;
    line-height: 1.25em;
    text-align: center;
    padding: 1rem;
`;    
export const Paragraph = styled.p`
    font-size: 55%;
    padding: .5rem 1rem;
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

export const Group = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Item = styled.p`
    font-size: 50%;
`;