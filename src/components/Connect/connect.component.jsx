import React from 'react';

import {
    Container,
    InnerContainer,
    Heading,
    Text,
    Wrapper,
    Button,

} from './connect.style';

const classes = {
    icon: {
        marginRight: '5px'
    },
    link: {
        display: 'block'
    }
}

export const Connect = () => {
    return(
       <Container>
           <InnerContainer>
                <Heading>
                    <span style={{color:'#6d0308'}}>Connect</span> With Raul
                </Heading>
                <Text>
                    Get the latest news and updates on all things Raul Finaru.
                </Text>
                <Wrapper>
                    <Button>
                        <i className="fab fa-facebook-f" style={classes.icon}/>
                        Follow @Raul Finaru
                    </Button>
                    <Button>
                        <i className="fab fa-linkedin-in" style={classes.icon}/>
                        Connect with Raul
                    </Button>
                    <Button>
                        <i className="fas fa-mail-bulk" style={classes.icon}/>
                        Send An Email
                    </Button>
                </Wrapper>
           </InnerContainer>
       </Container> 
    )
}

export default Connect;