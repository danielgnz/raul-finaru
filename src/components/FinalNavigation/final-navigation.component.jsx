import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
    Container,
    Title,
    Text,
    Wrapper,
    Button,
    StyledContainer,
} from './final-navigation.style';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #fff;
`;

export const FinalNavigation = () => {
    return (
        <Container>
            <StyledContainer>
                <Title>
                Where do you want to go from here?
                </Title>

                {/* Optional Text */}
                
                <Text>
                    You have seen my homepage and you still haven't taken action. I don't know why is that, but I can help you figure it out.
                </Text>

                <Wrapper>
                    <StyledLink to='/hire'>
                        <Button>
                            WORK WITH RAUL
                        </Button>
                    </StyledLink>
                   
                   <StyledLink to='/what-is-a-high-ticket-closer'>
                        <Button>
                            WHAT IS HTC
                        </Button>
                   </StyledLink>
                    
                    <StyledLink to='/story'>
                        <Button>
                            RAUL'S STORY
                        </Button>
                    </StyledLink>

                </Wrapper>
            </StyledContainer>
            
        </Container>
    )
}

export default FinalNavigation;