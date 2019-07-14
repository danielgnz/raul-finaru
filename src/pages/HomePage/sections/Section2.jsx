import React from 'react';

import styled from 'styled-components';
import headshotCloser from '../../../assets/who-is-headshot-closer.jpg';

import Container from '../../../utils/components/Container';
import Text from '../../../utils/components/Text';

export const Image = styled.div`
    height: 55vh;
    width: 100%;
    background: url(${headshotCloser});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;

export const Section2 = () => {
    return (
        <Container height="90" center id="home-section2">
            <Text 
                variant="h2"
                align="center"
                weight="600"
                size="90"
                spacing={0.1}
                uppercase
                style={{lineHeight: '1.25em', padding:'1rem'}}
            >
                Who is the Headshot Closer™?
            </Text>

            <Image/>
        
            <Container height="15" center>
                <Text
                    size="65"
                    weight="600"
                    spacing={0.1}
                    color="#d9b98d"
                    style={{marginTop: '1.5rem'}}
                >
                    Raul Finaru
                </Text>
                <Text 
                    size="50"
                    color="#aa0209"
                    weight="600"
                    spacing={0.04}
                    style={{marginTop: '-10px'}}
                >
                    Exclusive High Ticket Closer™
                </Text>
            </Container>
            
        </Container>
    )
}

export default Section2;