import React from 'react';

import {
    Container,
    Heading,
    Paragraph,
    Button,
    Group,
    Item,
    Wrapper,

} from './qualifying-section.style';

const classes = {
    icon: {
        fontSize: '150%',
        color: '#2bff40',
        marginRight: '5px'
    },
}

export const QualifyingSection = () => {
    return (
        <Container>
            <Heading>
            Are You Frustrated By Constantly Losing Potential High Paying Clients Over The Phone?
            </Heading>
            <Wrapper>
                <Paragraph>
                The One Call Closer System™ is built on a unique methodology specifically designed for high-value service providers who want a steady stream of high-ticket clients – those that pay $5000-$60,000+ each for your offers.
                </Paragraph>
                <Group> 
                    <Item>
                        <i className="fas fa-check" style={classes.icon}/>
                        Integer interdum aliquet turpis, vel hendrerit.
                    </Item>
                    <Item>
                        <i className="fas fa-check" style={classes.icon}/>
                        Integer interdum aliquet turpis, vel hendrerit.
                    </Item>
                    <Item>
                        <i className="fas fa-check" style={classes.icon}/>
                        Integer interdum aliquet turpis, vel hendrerit.
                    </Item>
                </Group>
                <div>
                    <Button>
                    Book a call
                    </Button>
                </div>
            </Wrapper>
            
           
        </Container>
    )
}

export default QualifyingSection;