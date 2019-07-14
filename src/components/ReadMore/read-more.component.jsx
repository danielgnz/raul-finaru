import React from 'react';

import {
    SmallDivider,
    ButtonLink,
    RightArrow,
    TextLink,
    StyledText

} from './read-more.style';

import Container from '../../utils/components/Container';
import Text from '../../utils/components/Text';

export const ReadMore = ({title, text, dest, ...otherProps}) => {
    return (
        <Container  bgColor="#fff" alignItems="center" justifyContent="space-evenly" style={{height: '50%'}}>
            <Container  bgColor="#fff" center>
                <Text align="center" variant="h3" size="65" spacing={0.05} color="#6d0308" weight="500">
                    {title}
                </Text>
                <SmallDivider />
            </Container> 
            <StyledText color="#000" size="45" align="center" spacing={0.05} style={{lineHeight: '1.5em', margin: '0.05em'}}>
                {text}
            </StyledText>
            <Container bgColor="#fff" alignItems="center" justifyContent="space-between" height="12">
                <ButtonLink to={dest}>
                    <RightArrow>
                        &#8250;
                    </RightArrow>
                </ButtonLink>
                <TextLink to={dest}>
                    Read More
                </TextLink>
            </Container>
        </Container>

    )
}

export default ReadMore;