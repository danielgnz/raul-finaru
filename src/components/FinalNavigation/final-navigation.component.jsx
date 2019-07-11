import React from 'react';

import {
    Container,
    Title,
    Text,
    Wrapper,
    Button
} from './final-navigation.style';

export const FinalNavigation = () => {
    return (
        <Container>
            <Title>
            Where do you want to go from here?
            </Title>
            <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec.
            </Text>
            <Wrapper>
                <Button>
                    GO TO PAGE X
                </Button>
                <Button>
                    GO TO PAGE X
                </Button>
                <Button>
                    GO TO PAGE X
                </Button>
            </Wrapper>
        </Container>
    )
}

export default FinalNavigation;