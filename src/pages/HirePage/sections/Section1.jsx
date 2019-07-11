import React from 'react';

import HeroSection from '../../../components/HeroSection/hero-section.component';
import heroImage from '../../../assets/hire-hero.jpg';


export const Section1 = () => {
    return (
        <HeroSection 
                image={heroImage}
                title={`HIRE THE BEST, AND ONLY CRY ONCE`}
                subtitle={`THE HEADSHOT CLOSER™`}
                btnText={`GET STARTED`}
        />
    )
}

export default Section1;