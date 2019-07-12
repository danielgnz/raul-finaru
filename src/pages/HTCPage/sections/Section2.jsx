import React from 'react';

import Container from '../../../utils/components/Container';
import Text from '../../../utils/components/Text';


const classes = {
    text: {
        color: "#fff",
        size: "60",
        padding: "1",
        align: "center"
    },
    heading: {
        size: "70",
        padding: "1",
        spacing: "0.05",
        weight: "600",
    },
    headline: {
        variant: "h1",
        align: "center",
        size: "130",
    },
}

export const Section2 = () => {
    return (
            <Container bgColor="#000" center height="90">

                <Text {...classes.text}>
                Very simply put, a  <span style={{fontWeight: '550', color: '#F5CA7B'}}>High Ticket Closer™</span> closes High-Ticket products/services over the phone. 
                </Text>

                <Text {...classes.text}>
                A High Ticket product or service is usually defined as a product or service that costs $2,000 or more. 
                </Text>

                <Text {...classes.text}>
                    They could cost $2k, $5k, $10k, $25k, $50k and even $100k or higher.
                </Text>

                <Text {...classes.text}>
                    These phone calls could last anywhere from 30 minutes or longer but the goal is to close a deal within a single call.
                </Text>

            </Container>
    )
}

export default Section2;