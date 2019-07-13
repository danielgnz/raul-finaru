import React from 'react';
import styled from 'styled-components';

import Text from '../../../utils/components/Text';
import Container from '../../../utils/components/Container';

import raulphoto from '../../../assets/raul-finaru.png';

const Button = styled.button`
    text-transform: uppercase;
    text-align: center;
    padding: .5rem 2rem;
    border-radius: 50px;
    background: #F5CA7B;
    border: none;
    font-size: 55%;
    margin: 1rem;
    cursor: pointer;
`;

const classes = {
    name: {
        color: '#ffe09f',
        fontWeight: "550",
        marginTop: 0,
    }
}

export const TextComponent = () => {
    return (
        <Container center>
            <Text 
                align="center"
                uppercase
                weight="600"
                size="80"
                variant="h2"
                spacing={0.1}
                style={{lineHeight: '1.25em'}}
            >
                MEET RAUL
            </Text>

            <div>
                <img alt='raul-profile' src={raulphoto} width="350" />
            </div>

            <Text size="52" align="center">
                <cite>
                    "I believe when you embrace failure, you become fearless. And when you become fearless, life becomes limitless."
                </cite>
            </Text>

            <Text size="55" style={classes.name}>
                - Raul Finaru
            </Text>

            <Text size="45" style={{marginTop: 0}}>
                High-Ticket Closer & Property Investor
            </Text>
            
            <Button>
                THE STORY
            </Button>
            
            
        </Container>
    )
}

export default TextComponent;