import React from 'react';
import styled from 'styled-components';

import Container from '../../../utils/components/Container';
import Text from '../../../utils/components/Text';


const Testimonial = styled.div`
    width: 85vw;
    height: 20vh;
    background: rgb(245, 202, 123);
    margin: .5rem;
    -moz-box-shadow:    3px 3px 5px 6px #ccc;
    -webkit-box-shadow: 3px 3px 5px 6px #ccc;
    box-shadow:         3px 3px 5px 6px #ccc;
`;

export const Section7 = () => {
    return (
            <Container bgColor="#fff" >
                 <Text color="#000" variant="h1" size="80" padding="1" align="center">
                    Here's What My Private Clients Said 
                 </Text>
                 <Container center bgColor="#fff">
                    <Testimonial />
                    <Testimonial />
                    <Testimonial />
                 </Container>
            </Container>
    )
}

export default Section7;