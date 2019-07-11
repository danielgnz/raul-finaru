import React from 'react';
import divider from '../../assets/divider-white-bg.jpg';

import {
    Container,
    Group,
    InnerGroup,
    Title,
    SubTitle,
    SmallDivider,
    Paragraph,
    ButtonLink,
    RightArrow,
    ReadMoreWrapper,
    TextLink,

} from './read-more.style';

export const ReadMore = () => {
    return (
        <Container>
            {/* <Title>
                    Lorem ipsum dolor sit amet.
            </Title> */}
            <Group>
                <InnerGroup>
                    <SubTitle>
                        Vivamus tempor tristique?
                    </SubTitle>
                    <SmallDivider /> 
                </InnerGroup>
                <Paragraph>
                Curabitur dignissim velit a egestas semper. Aliquam est ligula, pulvinar nec sollicitudin vitae, condimentum sit amet mi. Vestibulum rutrum nisl...
                </Paragraph>
                <ReadMoreWrapper>
                    <ButtonLink to ='#'>
                        <RightArrow>
                            &#8250;
                        </RightArrow>
                    </ButtonLink>
                    <TextLink to='#'>
                        Read More
                    </TextLink>
                </ReadMoreWrapper>
            </Group>
            <Group>
                <InnerGroup>
                    <SubTitle>
                    Suspendisse pulvinar lacus et?
                    </SubTitle>
                    <SmallDivider /> 
                </InnerGroup>
                <Paragraph>
                Nullam ornare risus in massa dictum placerat. Nunc quis tellus eu neque pretium placerat. Maecenas congue congue mattis. Vestibulum hendrerit...
                </Paragraph>
                <ReadMoreWrapper>
                    <ButtonLink to ='#'>
                        <RightArrow>
                            &#8250;
                        </RightArrow>
                    </ButtonLink>
                    <TextLink to='#'>
                        Read More
                    </TextLink>
                </ReadMoreWrapper>
            </Group>
           
        </Container>
    )
}

export default ReadMore;