import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Container from '../../../utils/components/Container';
import Text from '../../../utils/components/Text';
import { Column } from '../../../utils/components/Grid';

import signature from '../../../assets/signature.png';

const Button = styled(Link)`
    text-decoration: none;
    background: rgb(255, 224, 159);
    border-radius: 25px;
    padding: .5rem 2.5rem;
    font-size: 60%;
    color: #000;
    letter-spacing: 0.05em;
    cursor: pointer;

    &:hover {
        background: rgba(255, 224, 159, 0.87);
    }
`;

const classes = {
    text: {
        color: "#fff",
        size: "60",
        padding: "1",
    },
    heading: {
        size: "70",
        padding: "1",
        spacing: "0.05",
        weight: "600",
    },
    headline: {
        variant: "h1",
        align: "center",
        size: "130",
    },
    signName: {
        margin: '0',
        paddingTop: '0', 
        paddingBottom: '0',
        color: '#ffe09f',
        fontWeight: "550",
    },
    signTitle: {
        margin: 0,
        color: '#fff',
        fontSize: '50%'
    }
}

const StyledContainer = styled(Container)`

     @media only screen and (min-width: 768px) {
          width: 75vw;
          margin: 0 auto;
     }

     @media only screen and (min-width: 1440px) {
        width: 50vw;
        margin: 0 auto;
     }
`;

export const Section10 = () => {
    return (
            <Container bgColor="#000">
                <StyledContainer bgColor="#000">
                    <Text {...classes.text}>
                        This opportunity is extremely limited because of the intense one-on-one time needed in order to provide you with results.
                    </Text>

                    <Text {...classes.text}>
                        I only pick up 2-3 contracts on a yearly basis based on who I decide is a right fit for my system by looking at the profitability of the business and time line.
                    </Text>

                    <Text {...classes.text}>
                        Therefore, it is physically impossible for me to work with more than a handful of people.
                    </Text>

                    <Text {...classes.text}>
                        Also, you should realize there’s a very large demand for personal one-on-one help from me, and what I am offering to you is unprecedented.
                    </Text>

                    <Text {...classes.text}>
                        So with that said, know that the window of opportunity may not be here even if you apply.
                    </Text>

                    <Text {...classes.text}>
                        If you feel like this is the right fit for you, click below, fill out your application, and let’s talk.
                    </Text>
               
                    
                    <Container center>
                        <Button onClick={() => {
                            window.Calendly.showPopupWidget('https://calendly.com/raulfinaru/30minutes');
                            return false;
                        }}>
                            Fill Out Application
                        </Button>
                    </Container>

                    <Container row center>
                        <Column xs={8}>
                            <Text {...classes.text}>
                                To Your Success,
                            </Text>
                            <Container>
                                <Text 
                                    {...classes.text}
                                    style={classes.signName}
                                >
                                    Raul Finaru
                                </Text>
                                <Text
                                    {...classes.text}
                                    style={classes.signTitle}>
                                    The Headshot Closer™
                                </Text>
                            </Container>
                        </Column>

                        <Column xs={4}>
                            <Container>
                                <img alt='signature' src={signature} width="100px"/>
                            </Container>
                        </Column>
                    </Container>
                </StyledContainer>
            </Container>
    )
}

export default Section10;