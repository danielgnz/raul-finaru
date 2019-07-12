import React from 'react';

import Container from '../../../utils/components/Container';
import Text from '../../../utils/components/Text';

import CheckIcon from '../../../utils/icons/CheckIcon';

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
        color: 'green',
        marginRight: '10px'
    }
}

export const Section4 = () => {
    return (
        <Container bgColor="#fff">
            <Text {...classes.heading}>
                Imagine how your business would change if you could...
            </Text>
            <Text {...classes.text}>
                <CheckIcon {...classes.icon}/>
                Improve your closing ratio, sales, revenue and profit
            </Text>
            <Text {...classes.text}>
                <CheckIcon {...classes.icon}/>
                Never have to worry about sales/closing ever again
            </Text>
            <Text {...classes.text}>
                <CheckIcon {...classes.icon}/>
                Be able to focus on the IMPORTANT tasks, do what you're good at and what you love doing
            </Text>
            <Text {...classes.text}>
                <CheckIcon {...classes.icon}/>
                Never pay a sales person who isn't performing
                </Text>
        </Container>
    )
}

export default Section4;