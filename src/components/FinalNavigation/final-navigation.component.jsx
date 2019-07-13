import React from 'react';

import {
    Container,
    Title,
    Text,
    Wrapper,
    Button,
    StyledContainer,
} from './final-navigation.style';


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
                    <Button>
                        WORK WITH RAUL
                    </Button>
                    <Button>
                        WHAT IS HTC
                    </Button>
                    <Button>
                        RAUL'S STORY
                    </Button>
                </Wrapper>
            </StyledContainer>
            
        </Container>
    )
}

export default FinalNavigation;