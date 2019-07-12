import React from 'react';

import HeroSection from '../../../components/HeroSection/hero-section.component';
import heroImage from '../../../assets/htc-hero-2.png';


export const Section1 = () => {
    return (
        <HeroSection 
                image={heroImage}
                title={`WHAT IS A HIGH TICKET CLOSER?`}
                subtitle={`THE HEADSHOT CLOSER™`}
                btnText={`FIND OUT`}
        />
    )
}

export default Section1;