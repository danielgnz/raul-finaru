import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;

`;

export const Title = styled.h1`
    padding: 1rem;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 100%;
    letter-spacing: .1em;
    line-height: 1.15em;
`;

export const Text = styled.p`
    font-size: 50%;
    letter-spacing: .05em;
`;
export const Wrapper = styled.div`
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 70%;
`;
export const Button = styled.div`
    &::before {
        content: " ";
        position: absolute;
        z-index: 1;
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        border: 2px solid #fff;        
    }
    position: relative;
    text-transform: uppercase;
    font-size: 45%;
    padding: .7rem 3rem;
    background: #2B2B2B;
    letter-spacing: 0.05em;
    border: 2px solid #2b2b2b;

    &:hover {
        background: #aa0209;
        border: 2px solid #aa0209;
    }

    cursor: pointer;

`;

export const StyledContainer = styled(Container)`
    @media only screen and (min-width: 768px) {
        width: 75vw;
    }
    @media only screen and (min-width: 1440px) {
        width: 50vw;
    }
`; 