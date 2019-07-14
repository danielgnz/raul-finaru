import React from 'react';
import styled from 'styled-components';

import Container from '../../../utils/components/Container';
import Text from '../../../utils/components/Text';

import danlok from '../../../assets/dan-banner-home.jpg';

import { Row, Column} from '../../../utils/components/Grid';
import ImageCard from '../components/AboutDanLok';

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

const StyledContainer = styled(Container)`
    position: relative;
     @media only screen and (min-width: 768px) {
          width: 75vw;
          margin: 0 auto;
     }

     @media only screen and (min-width: 1440px) {
        width: 50vw;
        margin: 0 auto;
     }
`;

const OverlayedRow = styled(Row)`
     padding-right: 1rem;
     margin-top: -10%;
     z-index: 2;

     @media only screen and (min-width: 1200) {
         
     }
`;

const DanLokContainer = styled(Container)`
     position: relative;
`;

export const Section2 = () => {
    return (
            <div>
                <Container bgColor="#000" center>
                    <StyledContainer>
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
                            These phone calls could last anywhere from 30 minutes or longer but the goal isnp to close a deal within a single call.
                        </Text>

                        <DanLokContainer>
                            <Row 
                                justifyContent="flex-start" 
                                style={{paddingLeft: '1rem'}}
                                >
                                <Column 
                                    xs={10} 
                                    sm={10}
                                    lg={9}
                                    style={{position: 'relative'}}>
                                    <img 
                                        alt='Dan Lok'
                                        src={danlok}
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            position: 'static',
                                        }}/>
                                </Column>
                            </Row>

                            <OverlayedRow 
                                justifyContent="flex-end"
                                >
                                <Column xs={10} sm={9} lg={8}>
                                    <ImageCard />
                                </Column>
                            </OverlayedRow>

                        </DanLokContainer>
                    </StyledContainer>
                </Container>
            </div>
            
    )
}

export default Section2;