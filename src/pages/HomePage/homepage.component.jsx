import React from 'react';

import FinalNavigation from '../../components/FinalNavigation/final-navigation.component';

import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import Section4 from './sections/Section4';
import Section5 from './sections/Section5';
import Section6 from './sections/Section6';
import Section7 from './sections/Section7';
import Section8 from './sections/Section8';
import Section9 from './sections/Section9';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
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
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }

    render() {
        const { width, height } = this.state;

        return (
            <div className="homepage">

                {/* Hero Section */}
                <Section1 width={width}/>

                {/* Who is the Headshot Closer? */}
                <Section2 />

                {/* Stats and Figures */}
                <Section3 />

                {/* Meet Raul */}
                <Section4 />

                {/* Read More Section */}
                <Section5 />

                {/* Qualifying Section */}
                <Section6 />

                {/* What Leaders have to say */}
                <Section7 />
                
                {/* Are you a Coach, Consultant or Thought Leader  */}
                <Section8 />

                {/* Connect with Raul */}
                <Section9 />

                {/* Where do you want to go from here? */}
                <FinalNavigation />
                
            </div>        
        )
    }
}

export default Home;