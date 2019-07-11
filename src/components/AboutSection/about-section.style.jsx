import styled from 'styled-components';
import headshotCloser from '../../assets/who-is-headshot-closer.jpg';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 90vh;
    align-items: center;
    align-content: center;
`;

export const Title = styled.h2`
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 90%;
    letter-spacing: .1em;
    line-height: 1.25em;
    height: 20vh;
`;

export const Image = styled.div`
    height: 55vh;
    width: 100%;
    background: url(${headshotCloser});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;

export const NameGroup = styled.div`
    height: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const NameTitle = styled.p`
    font-size: 65%;
    color: #d9b98d;
    font-weight: 600;
    letter-spacing: .1em;
    margin-top: 1.5rem;
`;
export const NameSubTitle = styled.p`
    font-size: 50%;
    color: #aa0209;
    font-weight: 600;
    letter-spacing: .04em;
    margin-top: -10px;
`;