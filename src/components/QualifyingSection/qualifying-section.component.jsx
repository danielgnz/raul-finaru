import React from 'react';
import styled from 'styled-components';

import Container from '../../utils/components/Container';
import Text from '../../utils/components/Text';

export const Button = styled.button`
    text-transform: uppercase;
    text-align: center;
    padding: .5rem 2rem;
    border-radius: 50px;
    background: #F5CA7B;
    border: none;
    font-size: 55%;
`;

const classes = {
    icon: {
        fontSize: '150%',
        color: '#2bff40',
        marginRight: '5px'
    },
}

export const QualifyingSection = () => {
    return (
        <Container
            alignItems="center" 
            justifyContent="space-between"
        >
            <Text 
                variant="h2"
                color="#f5ca7b"
                align="center"
                weight="600"
                size="70"
                spacing={.05}
                padding={1}
                style={{lineHeight: '1.25em'}}
            >
            Are You Frustrated By Constantly Losing Potential High Paying Clients Over The Phone?
            </Text>
            <Container 
                center 
                style={{height: '100%'}}
            >
                <Text
                    variant="p"
                    size="55"
                    style={{padding: '.5rem 1rem'}}
                >
                    The High-Ticket Closing System™ is built on a unique methodology specifically designed for high-value service providers who want a steady stream of high-ticket clients – those that pay $5000-$60,000+ each for your offers.

                </Text>
                <Container> 
                    <Text size="50" padding={1}>
                        <i className="fas fa-check" style={classes.icon}/>
                        Double, triple or even 5X your closing ratio, sales, revenue and PROFIT!                    </Text>
                    <Text size="50" padding={1}>
                        <i className="fas fa-check" style={classes.icon}/>
                        Never worry about sales/closing ever again
                    </Text>
                    <Text size="50" padding={1}>
                        <i className="fas fa-check" style={classes.icon}/>
                        Never pay a salesperson who isn’t performing
                    </Text>
                </Container>
                <div style={{marginBottom: '1em'}}>
                    <Button>
                    Book a call
                    </Button>
                </div>
            </Container>
            
        </Container>
    )
}

export default QualifyingSection;