import React from 'react';

import {
    Container,
    Title,
    Wrapper,
    Testimonial

}from './testimonials.style';

export const Testimonials = () => {
    return (
        <Container>
            <Title>
                What industry leaders have to say
            </Title>
            <Wrapper>
                <Testimonial />
                <Testimonial />
                <Testimonial />
                <Testimonial />
            </Wrapper>
        </Container>
    )
}

export default Testimonials;