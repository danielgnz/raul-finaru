import React from 'react';
import styled from 'styled-components';

import Container from '../../../utils/components/Container';
import Text from '../../../utils/components/Text';

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

export const Section6 = () => {
    return (
            <Container>
               <StyledContainer>
                 <Text variant="h1" size="100" padding="1" align="center">
                    I am focused on only one thing when I partner up with someone: 
                 </Text>
                 <Text variant="h1" size="150" padding="1" align="center">
                    <span style={{color: '#F5CA7B'}}>RESULTS</span>    
                 </Text>
                 </StyledContainer>
            </Container>
    )
}

export default Section6;