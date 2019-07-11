import React from 'react';

import HeroSection from '../../components/HeroSection/hero-section.component';
import AboutSection from '../../components/AboutSection/about-section.component';
import TextSection from '../../components/TextSection/text-section.component';
import StatsSection from '../../components/StatsSection/stats-section.component';
import QualifyingSection from '../../components/QualifyingSection/qualifying-section.component';
import ReadMore from '../../components/ReadMore/read-more.component';
import Testimonials from '../../components/Testimonials/testimonials.component';
import QualifyingExtra from '../../components/QualifyingExtra/qualifying-extra.component';
import Connect from '../../components/Connect/connect.component';
import FinalNavigation from '../../components/FinalNavigation/final-navigation.component';

import heroImage from '../../assets/home-hero.jpg';

export const Home = () => {
    return (
        <div className="homepage">
            <HeroSection 
                image={heroImage}
                title={`STOP SELLING START CLOSING`}
                subtitle={`ONE-CALL CLOSER METHODOLOGY`}
                btnText={`GET STARTED`}
            />
            <AboutSection />
            <StatsSection />
            <TextSection />
            <ReadMore/>
            <QualifyingSection />
            <Testimonials />
            <QualifyingExtra />
            <Connect />
            <FinalNavigation />
        </div>        
    )
}

export default Home;