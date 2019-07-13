import React from 'react';
import styled from 'styled-components';

import Container from '../../../utils/components/Container';
import Text from '../../../utils/components/Text';

import t1 from '../../../assets/t1-name.png';
import t2 from '../../../assets/t2-name.png';
import t3 from '../../../assets/t3-name.png';


export const TestimonialName = styled.div`
    width: 90vw;
    background: #fff;
    margin: .5rem;
    position: relative;
    text-align: center;
`;

export const TestimonialMessage = styled.div`
    position: absolute;
    height: 40vh;
    background: rgba(0, 0, 0, 0.5);
    width: 45vw;
    top: 0;
    right: 0;
`;



export const Section7 = () => {
    return (
        <Container 
            center    
        >
            <Text
                variant="h1"
                size="80"
                weight="600"
                spacing={.1}
                align="center"
                uppercase
                style={{lineHeight: '1.25'}}
            >
                What others say about Raul
            </Text>
            <Container 
                row
                justifyContent="center"
                wrap="wrap"
                alignItems="center"
                style={{height: '75%'}}
            >
                <TestimonialName>
                    <img alt='client' src={t1} />
                    
                </TestimonialName>
                

                <TestimonialName>
                    <img alt='client' src={t2} />
                    
                </TestimonialName>
                

                <TestimonialName>
                    <img alt='client' src={t3} />
                    
                </TestimonialName>
                

            </Container>
        </Container>
    )
}

export default Section7;