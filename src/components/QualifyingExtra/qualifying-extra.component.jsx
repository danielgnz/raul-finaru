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

export const LinkText = styled(Link)`
    margin-top: 1rem;
    font-size: 50%;
    text-align: center;
    color: #6d0308;
`

export const QualifyingExtra = () => {
    return (
        <Container 
            height="90" 
            bgColor="#fff" 
            color="#000"
        >
            <Text 
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
            </Text>
            <Container 
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
            </Container>
                <LinkText to='/'>
                    If so, discover why you should work with Raul.
                </LinkText>
        </Container>
    )
}

export default QualifyingExtra;