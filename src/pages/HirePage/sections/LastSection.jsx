import React from 'react';

import Container from '../../../utils/components/Container';
import Text from '../../../utils/components/Text';


const classes = {
    text: {
        color: "#000",
        size: "60",
        padding: "1",
    },
    heading: {
        color: "#000",
        size: "70",
        padding: "1",
        spacing: "0.05",
        weight: "600",
    },
    icon: {
        color: 'rgb(43, 255, 64)',
        marginRight: '10px'
    },
    span: {
        fontWeight: '550'
    }
}

export const LastSection = () => {
    return (
        <Container bgColor="#fff">
            <Text {...classes.heading}>
            You wouldn’t want to add thousands to your bottom line every month, would you?
            </Text>
            <Text {...classes.text}>
            This opportunity is <span style={classes.span}>extremely limited</span> because of the intense one-on-one time needed in order to provide you with the best service. I can only work with several clients a year based on who is the best fit.            </Text>
            <Text {...classes.text}>
            If you're ready to truly take your business to the next level, just click the link below <span style={classes.span}>NOW</span>, fill out a quick application and we will move forward from there! 
            </Text>
        </Container>
    )
}

export default LastSection;