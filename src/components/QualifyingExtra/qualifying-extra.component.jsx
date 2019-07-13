import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Container from '../../utils/components/Container';
import Text from '../../utils/components/Text';

const classes = {
    icon: {
        fontSize: '150%',
        marginRight: '5px'
    },

}

const StyledContainer = styled(Container)`
    @media only screen and (min-width: 768px) {
        width: 75vw;
    }
`;

const StyledText = styled(Text)`
    @media only screen and (min-width: 768px) {
        width: 75vw;
    }
    @media only screen and (min-width: 1024px) {
        width: 50vw;
    }
`;

export const LinkText = styled(Link)`
    margin-top: 1rem;
    font-size: 50%;
    text-align: center;
    color: #6d0308;
    padding: 1rem;
    margin-bottom: 1rem;
`

export const QualifyingExtra = () => {
    return (
        <Container 
            bgColor="#fff" 
            color="#000"
            center
        >
            <StyledText 
                color="#000"
                variant="h1" 
                align="center" 
                weight="600" 
                size="70"
                spacing={0.05}
                padding={1}
                style={{lineHeight: '1.25em'}}
            >
            Are You A Coach, Consultant, or Thought Leader That Sells A High-Ticket Product or Service?
            </StyledText>
            <StyledContainer 
                bgColor="#fff" 
                color="#000"
            > 
                <Text color="#000" size="50" style={{marginLeft: '1rem'}}>
                    <i className="fas fa-check-square" style={classes.icon}/>
                    Do you have a solid lead generation in place that gets you leads consistently but struggle with closing the sale?
                </Text>

                <Text color="#000" size="50" style={{marginLeft: '1rem'}}>
                    <i className="fas fa-check-square" style={classes.icon}/>
                    Have you used outside sales teams or a sales trainer to close your High Ticket offers but you were disappointed with the results and lack of sales?
                </Text>
                <Text color="#000" size="50" style={{marginLeft: '1rem'}}>
                    <i className="fas fa-check-square" style={classes.icon}/>
                    Are you spending endless amounts of money, energy, and resources on training your staff and new employees to get little to no return?
                </Text>
            </StyledContainer>
                <LinkText to='/'>
                    If so, discover why you should work with Raul.
                </LinkText>
        </Container>
    )
}

export default QualifyingExtra;