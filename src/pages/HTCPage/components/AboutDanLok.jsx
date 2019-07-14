import React from 'react';
import styled from 'styled-components';

import Container from '../../../utils/components/Container';
import Text from '../../../utils/components/Text';

const ImageCard=styled.div`
     box-shadow: 0 0 8px 2px rgba(0,0,0,.2);
`;

export const AboutDanLok = () => {
    return(
        <ImageCard>
            <Container 
                style={{width: '80%', padding: '2rem'}}
                bgColor="#1d1919"
            >
                <Text
                    color="#fff"
                    padding={1}
                    spacing={0.05}
                    weight="550"
                    size="80"
                >
                    Who Is Dan Lok?
                </Text>
                <Text
                    size="40"
                    spacing={0.04}
                    color={"rgba(255,255,255,.53)"}
                    weight="550"
                >
                    Dan Lok a.k.a. The King Of High-Ticket Sales™ is a Chinese-Canadian business magnate, world-renowned marketer, and entrepreneur extraordinaire.
                </Text>
                <Text
                    size="40"
                    spacing={0.05}
                    color="rgba(255,255,255,.53)"
                >
                    In the 2000s, Mr. Lok led the expansion of the internet-marketing industry and continues to be seen as the world’s foremost expert in marketing and business today.
                </Text>
                <Text
                    size="40"
                    spacing={0.05}
                    color="rgba(255,255,255,.53)"
                >
                    During his time developing the internet-marketing industry, Mr. Lok accrued substantial profits from his internet & technology businesses. By age 27, Mr. Lok became a self-made millionaire. Shortly after, an 8-figure entrepreneur.
                </Text>
                <Text
                    size="40"
                    spacing={0.05}
                    color="rgba(255,255,255,.53)"
                >
                    Together, Mr. Lok and his High-Ticket Closers™ have closed tens of millions of dollars in sales across dozens of industries.
                </Text>
            </Container>
        </ImageCard>
    )
}

export default AboutDanLok;