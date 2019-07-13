import React from 'react';
import styled from 'styled-components';

import Container from '../../utils/components/Container';
import Text from '../../utils/components/Text';

import bgImage from '../../assets/connect-with-raul.png';

const StyledContainer = styled(Container)`
    background: url(${bgImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

const StyledInnerContainer = styled(Container)`
    height: 80%;
    width: 90%;
    background: rgba(255, 255, 255, 0.8);
`;

const Button = styled.div`
    color: #F5CA7B;
    background: #000;
    padding: .7rem 3rem;
    border-radius: 10px;
    font-size: 40%;
    font-weight: 600;
`;

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
       <StyledContainer height="90" center>
           <StyledInnerContainer center color="#000">
                <Text 
                    color="#000"
                    variant="h1" 
                    size="70" 
                    weight="600" 
                    spacing={.05} 
                    style={{lineHeight: '1.25em'}}
                >
                    <span style={{color:'#6d0308'}}>Connect</span> With Raul
                </Text>
                <Text
                    size="50"
                    align="center"
                    spacing={.05}
                    color="#000"
                    style={{padding: '0 2rem'}}
                >
                    Get the latest news and updates on all things Raul Finaru.
                </Text>
                <Container
                    bgColor="rgba(255, 255, 255, 0)"
                    height="25"
                    justifyContent="space-between"
                    style={{marginTop: '1rem'}}
                >
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
                </Container>
           </StyledInnerContainer>
       </StyledContainer> 
    )
}

export default Connect;