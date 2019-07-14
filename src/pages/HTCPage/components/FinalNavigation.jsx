import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../../../utils/components/Container';
import Text from '../../../utils/components/Text';

import styled from 'styled-components';

const Title = styled(Text)`
    padding: 1rem;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 100%;
    line-height: 1.15em;
`;

const Wrapper = styled.div`
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 70%;
`;
const Button = styled.div`
    &::before {
        content: " ";
        position: absolute;
        z-index: 1;
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        border: 2px solid #fff;        
    }
    position: relative;
    text-transform: uppercase;
    font-size: 45%;
    padding: .7rem 3rem;
    background: #2B2B2B;
    letter-spacing: 0.05em;
    border: 2px solid #2b2b2b;

    &:hover {
        background: #aa0209;
        border: 2px solid #aa0209;
    }

    cursor: pointer;

`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #fff;
`;

export const FinalNavigation = () => {
    return (
        <Container 
            center 
            justifyContent="space-between">
            <Title>
                Where do you want to go from here?
            </Title>

                {/* Optional Text */}

                <Wrapper>
                    <StyledLink to='/'>
                        <Button style={{textAlign: 'center'}}>
                            HOME
                        </Button>
                    </StyledLink>

                    <StyledLink to='/hire'>
                        <Button style={{textAlign: 'center'}}>
                            WORK WITH RAUL
                        </Button>
                    </StyledLink>

                    <StyledLink to='/story'>
                        <Button style={{textAlign: 'center'}}>
                            RAUL'S STORY
                        </Button>
                    </StyledLink>
                </Wrapper>  
        </Container>
    )
}

export default FinalNavigation;