import React from 'react';

import HeroSection from '../../../components/HeroSection/hero-section.component';
import heroImage from '../../../assets/home-hero.jpg';

class Section1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
        };
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({
            width: window.innerWidth
        })
    }

    render() {
        const { width } = this.state;
        
        const title = width < 565 ? 'STOP SELLING START CLOSING' : 'STOP SELLING, START CLOSING'; 
        
        return (
            <HeroSection 
                image={heroImage}
                title={title}
                subtitle={`10X Your Sales • Income • Life`}
                btnText={`GET STARTED`}
            />
        )
    }
    
}

export default Section1;