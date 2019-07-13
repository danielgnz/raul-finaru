import React from 'react';

import { Column } from '../../utils/components/Grid';

import {
    TestimonialName,
    AvatarImg,
    Image,
    LinkedInBtn,
    StyledText,
} from './testimonial.style.jsx';


export const Testimonial = ({name, avatar, link, text, ...otherProps}) => {
    return (
        <TestimonialName {...otherProps}>
            <Column 
                xs={12}
                sm={4} 
                md={6}
                alignItems="center" 
                justifyContent="center" 
                
            >
                <AvatarImg>
                    <Image alt='client' src={avatar} />
                </AvatarImg>
                <StyledText
                    {...otherProps}
                    size="40"
                    weight="600"
                >
                    {name}
                </StyledText>
                <a href={link}>
                    <LinkedInBtn>
                        <i className="fab fa-linkedin-in" style={{color: '#fff'}}/>
                    </LinkedInBtn>
                </a>
            </Column>

            <Column 
                xs={12}
                sm={8} 
                md={6}
                alignItems="center" 
                justifyContent="center" 
                
            >
                <StyledText
                    {...otherProps}
                    size="40"
                    padding={1}
                >
                    <cite>
                        {text}
                    </cite>
                </StyledText>
            </Column>
        </TestimonialName>
    )
}

export default Testimonial;