import styled, { css } from 'styled-components';

const flexCenter = css`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`;

export const HeroSectionContainer = styled.div`
    position: relative;
    margin-top: 10vh;
    height: 90vh;
`;

export const HeroImageContainer = styled.div`
    &::before {
        ${({image}) => image ? `background: url(${image});` : `background: #fff;`}
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -2;
        opacity: 0.3;
        position: absolute;
    }

    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
    position: relative;

    ${props => props.flexCenter && flexCenter }
`;

export const HeroMessage = styled.div`
    color: #fff;
    text-shadow: #343a40 1px 1px;
    min-width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    min-height: 60%;
`;

const heroMessageElements = css`
    width: 100%;
    display: block;
    text-align: center;
`;

export const HeroTitle = styled.h1`
    ${heroMessageElements}
    margin: 3% 0;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 150%;
    letter-spacing: 0.05em;
`;
export const HeroSubtitle = styled.h2`
    ${heroMessageElements}
    font-size: 60%
    color: #F5CA7B;
    font-weight: 500;
`;
export const HeroButton = styled.div`
    text-transform: uppercase;
    text-align: center;
    padding: 1rem 4rem;
    border-radius: 50px;
    background: #F5CA7B;
    border: none;
    font-size: 70%;
    cursor: pointer;
    color: #000;
    text-shadow: none;
    
    &:hover {
        background: #f5ca7bdb;
    }
`;