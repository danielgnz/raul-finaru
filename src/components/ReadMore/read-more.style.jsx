import styled from 'styled-components';
import divider from '../../assets/divider-white-bg.jpg';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #000;
    background: #fff;
    border-bottom: 1px solid #000;
`;

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 50%;
`;

export const InnerGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    margin-top: 1.5rem;
    text-align: center;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 80%;
    letter-spacing: .05em;
    line-height: 1.25em;
`;
export const MainDivider = styled.div`
    background: url(${divider}) cover;
    width: 100%;
`;
export const SubTitle = styled.h3`
    margin-top: 1rem;
    font-size: 65%;
    letter-spacing: 0.05em;
    // color: #7f6631;
    color: #6d0308;
    font-weight: 500;
`;

export const SmallDivider = styled.span`
    width: 25%;
    border: .5px solid #7f6631;
`;
export const Paragraph = styled.p`
    font-size: 45%;
    text-align: center;
    letter-spacing: .05em;
    line-height: 1.5em;
    margin: 0.5em;

`;

export const ReadMoreWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 12vh;
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
