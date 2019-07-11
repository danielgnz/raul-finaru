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
`;

export const OptionLink = styled(Link)`
    z-index: 3;
    color #fff;
    text-decoration: none;
    font-size: 60%;
    letter-spacing: 0.05em;
`;

export const Hamburger = styled.div`
    margin: 1rem;
`;

export const Line = styled.div`
    width: 30px;
    height: 3px;
    background: #fff;
    margin: 5px;
`;