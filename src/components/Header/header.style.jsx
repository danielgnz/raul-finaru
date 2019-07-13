import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    height: 10vh;
    width: 100%;
    top: 0;
    background: #000;
    z-index: 1;
`;

export const LogoContainer = styled(Link)`
    width: 20%;
    height: 100%;
    position: relative;

    & img {
        margin: .5rem;
    }
`

export const OptionsContainer = styled.div`
    
    @media only screen and (max-width: 767px) {
        position: fixed;
        width: 100%;
        height: 30vh;
        display: ${props => (props.isOpen ? 'flex' : 'none')};
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        z-index: 1;
        top: 10%;
        right: 0%;
        margin-right: 0;
        opacity: 1;
        background: #000;
        cursor: pointer;
    }
    
`;

export const OptionLink = styled(Link)`
    font-size: 50%;
    text-decoration: none;
    margin-right: 2rem;
    color: #fff;
    letter-spacing: 0.05em;


    @media only screen and (max-width: 767px) {
        z-index: 3;
        font-size: 60%;
        letter-spacing: 0.05em;
    }

    &:hover {
        text-decoration: underline;
    }

   
`;

export const Hamburger = styled.div`
    margin: 1rem;

    @media only screen and (min-width: 768px) {
        display: none;
    }
`;

export const Line = styled.div`
    width: 30px;
    height: 3px;
    background: #fff;
    margin: 5px;
`;