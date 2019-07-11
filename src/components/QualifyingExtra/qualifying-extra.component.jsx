import React from 'react';

import { 
    Container,
    Title,
    Group,
    Item,
    LinkText

} from './qualifying-extra.style';

const classes = {
    icon: {
        fontSize: '150%',
        marginRight: '5px'
    },
}

export const QualifyingExtra = () => {
    return (
        <Container>
            <Title>
            Are You A Coach, Consultant, or Thought Leader That Sells A High-Ticket Product or Service?
            </Title>
            <Group> 
                <Item>
                    <i className="fas fa-check-square" style={classes.icon}/>
                    Do you have a solid lead generation in place that gets you leads consistently but struggle with closing the sale?
                </Item>
                <Item>
                    <i className="fas fa-check-square" style={classes.icon}/>
                    Have you used outside sales teams or a sales trainer to close your High Ticket offers but you were disappointed with the results and lack of sales?
                </Item>
                <Item>
                    <i className="fas fa-check-square" style={classes.icon}/>
                    Are you spending endless amounts of money, energy, and resources on training your staff and new employees to get little to no return?
                </Item>
                </Group>
                <LinkText to='/'>
                    If so, discover why you should work with Raul.
                </LinkText>
        </Container>
    )
}

export default QualifyingExtra;