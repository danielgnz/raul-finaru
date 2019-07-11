import React from 'react';

import { 
    HeroSectionContainer,
    HeroImageContainer,
    HeroMessage,
    HeroTitle,
    HeroSubtitle,
    HeroButton
} from './hero-section.style';

export const HeroSection = ({image, title, subtitle, btnText, ...otherProps}) => {
    return (
        <HeroSectionContainer >
            <HeroImageContainer flexCenter image={image}>
                <HeroMessage>
                    <HeroTitle>
                        {title}
                    </HeroTitle>
                    <HeroSubtitle>
                       {subtitle}
                    </HeroSubtitle>
                    <HeroButton>
                        {btnText}
                    </HeroButton>
                </HeroMessage>
            </HeroImageContainer>
        </HeroSectionContainer>
    )
}

export default HeroSection;