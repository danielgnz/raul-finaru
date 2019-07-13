import React from 'react';
import styled from 'styled-components';

import Container from '../../../utils/components/Container';
import Text from '../../../utils/components/Text';


const classes = {
    text: {
        color: "#fff",
        size: "60",
        padding: "1",
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

export const Section8 = () => {
    return (
            <Container bgColor="#000">

                <StyledContainer bgColor="#000">
                    <Text {...classes.heading} color="#F5CA7B">
                        Here’s What I Want You to Do Next:
                    </Text>

                    <Text {...classes.text}>
                        If you meet the criteria above and would like to talk to me personally about getting you incredible results, then I’ll happily set aside some time for you.
                    </Text>

                    <Text {...classes.text}>
                        Here’s how the process works:
                    </Text>

                    <Text {...classes.text}>
                        <span style={{fontWeight: '550', color: "#F5CA7B"}}>First</span>, you need to fill out an application. Don’t worry, it’s simple and unobtrusive.
                    </Text>

                    <Text {...classes.text} weight="550" color="#fff">
                        I just need to know what you’re selling, get an idea of what you want to accomplish, and so forth.
                    </Text>

                    <Text {...classes.text}> 
                        <span style={{fontWeight: '550', color: "#F5CA7B"}}>Second</span>, you will be directed to my private and personal calendar. You will then book your time with me. 
                    </Text>

                    <Text {...classes.text}>
                        <span style={{fontWeight: '550', color: "#F5CA7B"}}>Very Important:</span> There is only 1 application allowed per business or thought leader. If you apply and decide not to commit to the phone call then you will be black listed. <span style={{fontWeight:'550', color:'red'}}>This is your final warning!</span>
                    </Text>

                    <Text {...classes.heading} color="#F5CA7B">
                        Here’s What Will Happen After That:
                    </Text>
                    
                    <Text {...classes.text}>
                        Once I have your application, one of my trained and very experienced team members will look over your application and will confirm your booking time.
                    </Text>

                    <Text {...classes.text}>
                        Our initial call will be between 45 and 90 minutes.
                    </Text>

                    <Text {...classes.text}>
                        This is where we really begin working to figure out exactly what you want… and how to make it happen.
                    </Text>

                    <Text {...classes.text}>
                        I will review your goals, your offers, lead generating process and so forth… and I’ll propose a plan to bring in money immediately.
                    </Text>

                    <Text {...classes.text}>
                        So you literally can’t lose.
                    </Text>

                </StyledContainer>
                <Container bgColor="#fff">
                   <StyledContainer bgColor="#fff">
                    <Text {...classes.headline} uppercase color="#aa0209">
                            Warning:
                        </Text>
                        <Text {...classes.heading} color="#aa0209" align="center" uppercase size="80">
                            Time Is A Factor
                        </Text>
                   </StyledContainer>
                </Container>

            </Container>
    )
}

export default Section8;