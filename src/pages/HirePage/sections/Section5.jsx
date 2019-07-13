import React from 'react';
import styled from 'styled-components';

import Container from '../../../utils/components/Container';
import Text from '../../../utils/components/Text';


const classes = {
    text: {
        color: "#000",
        size: "60",
        padding: "1",
    },
    heading: {
        color: "#000",
        size: "70",
        padding: "1",
        spacing: "0.05",
        weight: "600",
    },
    icon: {
        color: 'rgb(43, 255, 64)',
        marginRight: '10px'
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

export const Section5 = () => {
    return (
        <Container bgColor="#fff">
            <StyledContainer bgColor="#fff">
                <Text {...classes.heading}>
                    How much easier would your life be?
                </Text>
                <Text {...classes.text}>
                    What if I told you that I, Raul, am a professionally trained <span style={{fontWeight: '550', color: '#aa0209'}}>High-Ticket Closer™</span> who will do all that and more, one phone call at a time!
                </Text>
                <Text {...classes.text}>
                    As a <span style={{fontWeight: '550', color: '#aa0209'}}>High-Ticket Closer™</span>, I am committed to <span style={{fontWeight: '550'}}>triple</span> your closing ratio and to ensure that your business is scaling towards your goals, on a <span style={{fontWeight: '550'}}>PURELY COMMISSION BASIS!</span>
                </Text>
            </StyledContainer>
        </Container>
    )
}

export default Section5;