import React from 'react';

import { Link as ScrollLink } from 'react-scroll';

import { 
    HeroSectionContainer,
    HeroImageContainer,
    HeroMessage,
    HeroTitle,
    HeroSubtitle,
    HeroButton
} from './hero-section.style';

export const HeroSection = ({image, title, subtitle, btnText, dest, ...otherProps}) => {
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
                    <ScrollLink
                        to={dest}
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70}
                    >
                        <HeroButton>
                            {btnText}
                        </HeroButton>
                    </ScrollLink>
                    
                </HeroMessage>
            </HeroImageContainer>
        </HeroSectionContainer>
    )
}

export default HeroSection;