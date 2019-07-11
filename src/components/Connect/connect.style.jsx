import styled from 'styled-components';
import bgImage from '../../assets/connect-with-raul.png';

export const Container = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url(${bgImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const InnerContainer = styled.div`
    height: 80%;
    width: 90%;
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #000;
`;

export const Heading = styled.h1`
    font-size: 70%;
    font-weight: 600;
    letter-spacing: .05em;
    line-height: 1.25em
`;  
export const Text = styled.p`
    font-size: 50%;
    text-align: center;
    padding: 0 2rem;
    letter-spacing: 0.05em;

`;
export const Wrapper = styled.div`
    height: 25vh;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
export const Button = styled.div`
    color: #F5CA7B;
    background: #000;
    padding: .7rem 3rem;
    border-radius: 10px;
    font-size: 40%;
    font-weight: 600;
`;