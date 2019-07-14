import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Container from '../../../utils/components/Container';
import Text from '../../../utils/components/Text';

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
    color: #fff;
`;

export const Section1 = () => {
    return (
        <Container height="90" center>

            <Text>
                Coming Soon.
            </Text>

            <Link to='/' style={{textDecoration: 'none'}}>
                <Button>
                    Back Home
                </Button>
            </Link>

        </Container>

    )
}

export default Section1;