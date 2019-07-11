import styled from 'styled-components';

export const Container = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 80%;
    letter-spacing: .1em;
    line-height: 1.25em;
`;

export const Wrapper = styled.div`
    height: 75%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
`;

export const Testimonial = styled.div`
    width: 40vw;
    height: 30vh;
    background: #aa0209;
    margin: .5rem;
`;