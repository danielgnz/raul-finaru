import React from 'react';
import styled from 'styled-components';

import Container from '../../../utils/components/Container';
import Text from '../../../utils/components/Text';

const StyledText = styled(Text)`
     @media only screen and (min-width: 768px) {
          width: 75vw;
     }

     @media only screen and (min-width: 1440px) {
          width: 50vw;
     }
`;

export const Section2 = () => {
    return (
            <Container height="90" center id="hire-section2">
                 <StyledText variant="h1" size="100" padding="1" align="center">
            How Would You Like to Double, Triple, or Even Quadruple Your
Sales Closing Ratios Without Ever Doing the Selling Yourself? 
                 </StyledText>
            </Container>
    )
}

export default Section2;