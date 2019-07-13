import React from 'react';

import Container from '../../../utils/components/Container';
import Text from '../../../utils/components/Text';

export const Section3 = () => {
    return (
        <Container height="90" bgColor="#2b2b2b">
            <Container bgColor="#2b2b2b" center style={{height: "33.33%"}}>
                <Text color="#ffe09f" size="130%" variant="h3" style={{margin: '0'}}>
                $108.6M
                </Text>
                <Text align="center" size="50" style={{width: '50%'}}>
                Worth of Warehouse Equipment Sold
                </Text>
            </Container>
            <Container bgColor="#2b2b2b" center style={{height: "33.33%"}}>
                <Text color="#ffe09f" size="130%" variant="h3" style={{margin: '0'}}>
                463
                </Text>
                <Text align="center" size="50" style={{width: '50%'}}>
                Pick & Packer Videos Uploaded on YouTube
                </Text>
            </Container>
            <Container bgColor="#2b2b2b" center style={{height: "33.33%"}}>
                <Text color="#ffe09f" size="130%" variant="h3" style={{margin: '0'}}>
                3,123
                </Text>
                <Text align="center" size="50" style={{width: '50%'}}>
                Hours of Loading & Unloading Lorries
                </Text>
            </Container>
        </Container>
    )
}

export default Section3;