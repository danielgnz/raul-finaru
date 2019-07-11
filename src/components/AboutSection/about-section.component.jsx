import React from 'react';

import {
    Container,
    Title,
    Image,
    NameGroup,
    NameTitle,
    NameSubTitle,
 } from './about-section.style';

export const AboutSection = () => {
    return (
        <Container>
            <Title>
                Who is the Headshot Closer™?
            </Title>
            <Image/>
            <NameGroup>
                <NameTitle>
                    Raul Finaru
                </NameTitle>
                <NameSubTitle>
                    Exclusive High Ticket Closer™
                </NameSubTitle>
            </NameGroup>
            
        </Container>
    )
}

export default AboutSection;