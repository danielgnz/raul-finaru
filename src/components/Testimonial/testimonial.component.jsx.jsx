import React from 'react';


import Container from '../../utils/components/Container';
import Text from '../../utils/components/Text';

import { Column } from '../../utils/components/Grid';

import {
    TestimonialName,
    AvatarImg,
    Image,
    LinkedInBtn,
} from './testimonial.style.jsx';


export const Testimonial = ({name, avatar, link, text, ...otherProps}) => {
    return (
        <TestimonialName>
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
                <Text
                    size="40"
                    color="#000"
                    weight="600"
                >
                    {name}
                </Text>
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
                <Text 
                    color="#000" 
                    size="40"
                    padding={1}
                >
                    <cite>
                        {text}
                    </cite>
                </Text>
            </Column>
        </TestimonialName>
    )
}

export default Testimonial;