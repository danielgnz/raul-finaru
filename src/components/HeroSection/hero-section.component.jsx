import React from 'react';

import { 
    HeroSectionContainer,
    HeroImageContainer,
    HeroMessage,
    HeroTitle,
    HeroSubtitle,
    HeroButton
} from './hero-section.style';

export const HeroSection = () => {
    return (
        <HeroSectionContainer >
            <HeroImageContainer flexCenter>
                <HeroMessage>
                    <HeroTitle>
                        STOP SELLING, START CLOSING
                    </HeroTitle>
                    <HeroSubtitle>
                       ONE-CALL CLOSER METHODOLOGY
                    </HeroSubtitle>
                    <HeroButton>
                        Get Started
                    </HeroButton>
                </HeroMessage>
            </HeroImageContainer>
        </HeroSectionContainer>
    )
}

export default HeroSection;