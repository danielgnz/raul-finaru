import React from 'react';

import Container from '../../../utils/components/Container';
import Text from '../../../utils/components/Text';

import CheckCircleIcon from '../../../utils/icons/CheckCircleIcon';
import AngryIcon from '../../../utils/icons/AngryIcon';

const classes = {
    text: {
        color: "#000",
        size: "60",
        padding: "1",
    },
    headline: {
        variant: "h1",
        align: "center",
        size: "130",
    },
    heading: {
        size: "70",
        padding: "1",
        spacing: "0.05",
        weight: "600",
    },
    checkIcon : {
        color: 'green',
        marginRight: '10px',
    },
    angryIcon: {
        color: '#aa0209',
        marginRight: '10px',
    }
}

export const Section8 = () => {
    return (
        <div>
            <Container bgColor="#fff">
                <Text {...classes.headline} uppercase color="#aa0209">
                    Warning:
                </Text>
                <Text {...classes.heading} color="#aa0209" align="center">
                This Program is Not for Everyone
                </Text>
                <Text {...classes.heading} color="#000">
                Here Are the Requirements to Be Considered:
                </Text>
            </Container>

            <Container bgColor="#fff">
                <Text {...classes.text}>
                    <CheckCircleIcon {...classes.checkIcon}/>
                    You need to be a well-known industry authority leader, educator, or marketer in the coaching and consulting niche with a solid track record.                </Text>
                <Text {...classes.text}>
                    <CheckCircleIcon {...classes.checkIcon}/>
                    The program that your selling must be a high-ticket value with minimum price of $5,000.                
                    </Text>
                <Text {...classes.text}>
                    <CheckCircleIcon {...classes.checkIcon}/>
                    You need to have a legitimate program that provides actual transformational value to people.                
                </Text>
                <Text {...classes.text}>
                    <CheckCircleIcon {...classes.checkIcon}/>
                    You need to have great customer service, follow up, and a lead generating system that is proven effective.               
                </Text>
            </Container>

            <Container bgColor="#fff">
                <Text {...classes.heading} color="#aa0209" align="center">
                    Who I'm NOT Looking For
                </Text>
                <Text {...classes.heading} color="#000">
                    Do <span style={{color: '#aa0209'}}>Not</span> Apply:
                </Text>
            </Container>

            <Container bgColor="#fff">
                <Text {...classes.text}>
                    <AngryIcon {...classes.angryIcon}/>
                    If you’re selling “crap” programs that are $5000 and below.
                </Text>
                <Text {...classes.text}>
                    <AngryIcon {...classes.angryIcon}/>
                    The program that your selling must be a high-ticket value with minimum price of $5,000.                
                </Text>
                <Text {...classes.text}>
                    <AngryIcon {...classes.angryIcon}/>
                    If the program you provide doesn’t actually provide transformational value to your clients.
                </Text>
                <Text {...classes.text}>
                    <AngryIcon {...classes.angryIcon}/>
                    You need to have great customer service, follow up, and a lead generating system that is proven effective.               
                </Text>
            </Container>
        </div>
    )
}

export default Section8;