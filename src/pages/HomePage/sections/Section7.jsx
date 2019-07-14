import React from 'react';
import styled from 'styled-components';

import Container from '../../../utils/components/Container';
import Text from '../../../utils/components/Text';
import Testimonial from '../../../components/Testimonial/testimonial.component.jsx';

import avt1 from '../../../assets/t1-avatar.jpeg';
import avt2 from '../../../assets/t2-avatar.jpeg';
import avt3 from '../../../assets/t3-avatar.jpeg';


const StyledContainer = styled(Container)`
    width: 90vw;
    @media only screen and (min-width: 768px) {
        width: 75vw;
    }

    @media only screen and (min-width: 1024px) {
        width: 50vw;
    }
`;

export const Section7 = () => {
    return (
        <Container 
            center    
        >
            <Text
                variant="h1"
                size="80"
                weight="600"
                spacing={.1}
                align="center"
                uppercase
                style={{lineHeight: '1.25'}}
            >
                What others say about Raul
            </Text>
            <StyledContainer 
                center
            >
                <Testimonial
                    color="#000"
                    name="Stefan Morariu"
                    avatar={avt1}
                    link="https://www.linkedin.com/in/stefan-morariu-395468162/"
                    text={`"Raul was one of my assigned students during the HTC course. He came in prepared, showed incredible work ethic and overdelivered constantly. In the later weeks he proofed his action taking and signed his first contract as a closer. I also appreciate the way he communicated with the team and me. I can highly recommend him."`}
                />

                <Testimonial
                    name="Delvin Gandy"
                    color="#000"
                    avatar={avt2}
                    link="https://www.linkedin.com/in/delvin-gandy-8971ab187/"
                    text={`"I worked with Raul a number of times and I have to tell you. Raul is one of the best communicators I’ve met. He is driven, a great motivator and has a strong passion for what he does. He makes it look effortless, that’s what happens when you have someone who is committed to results while also adding value."`}
                />

                <Testimonial
                    name="Oskar E.V.Lundtoft"
                    color="#000"
                    avatar={avt3}
                    link="https://www.linkedin.com/in/oskar-e-v-lundtoft/"
                    text={`"Raul is an incredible fighter. I have never ever in my life met such an ambitious guy. He is a person that strives for success no matter the condition. If I were to hire a new leader on my team, Raul would definitely be the one."`}
                />
            
            </StyledContainer>
        </Container>
    )
}

export default Section7;