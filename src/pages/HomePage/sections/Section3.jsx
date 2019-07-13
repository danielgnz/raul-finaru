import React from 'react';

import Container from '../../../utils/components/Container';
import Text from '../../../utils/components/Text';
import { Row, Column } from '../../../utils/components/Grid';



export const Section3 = () => {
    return (
            <Container bgColor="#2b2b2b" center style={{padding: '2rem'}}>
                <Row justifyContent="space-between" alignItems="center">
                <Column xs={12} md={4} lg={4} alignItems="center">
                    
                    <Text align="center" color="#ffe09f" size="130%" variant="h3" style={{margin: '0'}}>
                    $108.6M
                    </Text>
                    <Text align="center" size="50" style={{width: '60%'}}>
                    Worth of Warehouse Equipment Sold
                    </Text>
                
                </Column>
                <Column xs={12} md={4} lg={4} alignItems="center">
                    
                    <Text align="center" color="#ffe09f" size="130%" variant="h3" style={{margin: '0'}}>
                    463
                    </Text>
                    <Text align="center" size="50" style={{width: '60%'}}>
                    Pick & Packer Videos Uploaded on YouTube
                    </Text>
            
                </Column>
                <Column xs={12} md={4} lg={4} alignItems="center">
                    
                    <Text align="center" color="#ffe09f" size="130%" variant="h3" style={{margin: '0'}}>
                    3,123
                    </Text>
                    <Text align="center" size="50" style={{width: '60%'}}>
                    Hours of Loading & Unloading Lorries
                    </Text>
                </Column>
                </Row>
                
            </Container>
    )
}

export default Section3;