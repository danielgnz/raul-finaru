import React from 'react';

import HeroSection from '../../../components/HeroSection/hero-section.component';
import heroImage from '../../../assets/home-hero.jpg';

export const Section1 = ({ width }) => {

        const title = width < 565 ? 'STOP SELLING START CLOSING' : 'STOP SELLING, START CLOSING'; 
        const subtitle = width < 565 ? '10X Your Sales • Income • Life' : '10X Your Sales  •  10X Your Income   •   10X Your Life';
        return (
            <HeroSection 
                image={heroImage}
                title={title}
                subtitle={subtitle}
                btnText={`GET STARTED`}
                dest="home-section2"
            />
        )
 
}

export default Section1;