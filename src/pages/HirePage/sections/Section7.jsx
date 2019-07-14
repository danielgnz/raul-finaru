import React from 'react';
import styled from 'styled-components';

import Container from '../../../utils/components/Container';
import Text from '../../../utils/components/Text';
import Testimonial from '../../../components/Testimonial/testimonial.component.jsx';


import avt1 from '../../../assets/t1-avatar.jpeg';
import avt2 from '../../../assets/t2-avatar.jpeg';
import avt3 from '../../../assets/t3-avatar.jpeg';

// const Testimonial = styled.div`
//     width: 85vw;
//     height: 20vh;
//     background: rgb(245, 202, 123);
//     margin: .5rem;
//     -moz-box-shadow:    3px 3px 5px 6px #ccc;
//     -webkit-box-shadow: 3px 3px 5px 6px #ccc;
//     box-shadow:         3px 3px 5px 6px #ccc;
// `;

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

const Box = styled.div`
    box-shadow: 0 0 8px 2px rgba(0,0,0,.2);
    margin: 1rem;
    padding: 1rem;
`;

export const Section7 = () => {
    return (
            <Container bgColor="#fff" >
                 <Text color="#000" variant="h1" size="80" padding="1" align="center">
                    Here's What Other People Said
                 </Text>
                 <StyledContainer 
                    bgColor="#fff"
                    center
                 >
                    <Box>
                        <Testimonial
                            color="#000"
                            name="Stefan Morariu"
                            avatar={avt1}
                            link="https://www.linkedin.com/in/stefan-morariu-395468162/"
                            text={`"Raul was one of my assigned students during the HTC course. He came in prepared, showed incredible work ethic and overdelivered constantly. In the later weeks he proofed his action taking and signed his first contract as a closer. I also appreciate the way he communicated with the team and me. I can highly recommend him."`}
                        />
                    </Box>
                    
                    <Box>
                        <Testimonial
                            color="#000"
                            name="Delvin Gandy"
                            avatar={avt2}
                            link="https://www.linkedin.com/in/delvin-gandy-8971ab187/"
                            text={`"I worked with Raul a number of times and I have to tell you. Raul is one of the best communicators I’ve met. He is driven, a great motivator and has a strong passion for what he does. He makes it look effortless, that’s what happens when you have someone who is committed to results while also adding value."`}
                        />
                    </Box>
                    

                    <Box>
                        <Testimonial
                            color="#000"
                            name="Oskar E.V.Lundtoft"
                            avatar={avt3}
                            link="https://www.linkedin.com/in/oskar-e-v-lundtoft/"
                            text={`"Raul is an incredible fighter. I have never ever in my life met such an ambitious guy. He is a person that strives for success no matter the condition. If I were to hire a new leader on my team, Raul would definitely be the one."`}
                        />
                    </Box>
                    
            
                </StyledContainer>
            </Container>
    )
}

export default Section7;