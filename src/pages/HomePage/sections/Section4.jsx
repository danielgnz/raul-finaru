import React from 'react';
import styled from 'styled-components';

import Text from '../../../utils/components/Text';
import Container from '../../../utils/components/Container';

import raulphoto from '../../../assets/raul-finaru.png';

import { Row, Column } from '../../../utils/components/Grid';

const Button = styled.button`
    text-transform: uppercase;
    text-align: center;
    padding: .5rem 2rem;
    border-radius: 50px;
    background: #F5CA7B;
    border: none;
    font-size: 55%;
    margin: 2rem;
    cursor: pointer;
`;

const Image = styled.img`
    max-width: 100%;
    min-height: 100%;
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
                variant="h2"
                align="center"
                weight="600"
                size="90"
                spacing={0.1}
                uppercase   
                style={{lineHeight: '1.25em', padding:'1rem'}}
            >
                MEET RAUL
            </Text>

            <Row alignItems="center" justifyContent="center">
                <Column xs={12} md={6} alignItems="center" justifyContent="center">
                    <div style={{width: '75%'}}>
                        <Image alt='Raul Finaru' src={raulphoto}/>
                    </div>
                </Column>
                <Column xs={12} md={6} alignItems="center" justifyContent="center">
                    <Text size="52" align="center" padding={1}>
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
                </Column>
            </Row>

           
            
            
        </Container>
    )
}

export default TextComponent;