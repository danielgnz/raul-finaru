import React from 'react';
import styled from 'styled-components';

import Container from '../../../utils/components/Container';
import Text from '../../../utils/components/Text';

import CheckSquareIcon from '../../../utils/icons/CheckSquareIcon';

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
    icon : {
        marginRight: '10px',
        color: '#aa0209'
    }
}

const StyledContainer = styled(Container)`

     @media only screen and (min-width: 768px) {
          width: 75vw;
          margin: 0 auto;
     }

     @media only screen and (min-width: 1440px) {
        width: 50vw;
        margin: 0 auto;
     }
`;


export const Section3 = () => {
    return (
        <Container bgColor="#fff">
            <StyledContainer bgColor="#fff">
                <Text {...classes.text}>
                    I'm looking for a High-Quality Partner for whom I can close their High-Ticket services in one phone call and generate consistent sales and higher profit.
                    </Text>
                    <Text {...classes.text}>
                    But first...
                    </Text>
                    <Text {...classes.heading}>
                    Let Me Ask You Some Questions So We Can Get To Know Each Other…
                    </Text>
                    <Container bgColor="#fff" color="#000">
                    <Text {...classes.text}>
                        <CheckSquareIcon {...classes.icon}/>
                        Have you spent a lot of time, money, and energy investing in a consistent lead generation strategy that gets the leads on the phone with you but you just can`t seem to close the sale?
                    </Text>
                    <Text {...classes.text}>
                        <CheckSquareIcon {...classes.icon}/>
                        Do you not have the time to do the selling yourself nor do you have the time to train yourself on advanced sales and closing strategies?                
                    </Text>
                    <Text {...classes.text}>
                        <CheckSquareIcon {...classes.icon}/>
                        And lastly, have you used other sales teams or salespeople before, but were disappointed with the results?                
                    </Text>
                    <Text {...classes.text}>
                    I understand that closing might not be your strongest skill, and that's okay.
                    </Text>
                    <Text {...classes.text}>
                    Why stress closing sales when you can focus on what you enjoyed doing in the first place?
                    </Text>
                    </Container>
            </StyledContainer>   
        </Container>
    )
}

export default Section3;