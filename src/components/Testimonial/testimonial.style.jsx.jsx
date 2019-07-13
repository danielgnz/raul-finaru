import styled from 'styled-components';

import { Row } from '../../utils/components/Grid';
import Text from '../../utils/components/Text';

export const TestimonialName = styled(Row)`
    width: 100%;
    background: #fff;
    margin: .5rem;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    ${({bgColor}) => bgColor && `background: ${bgColor};`}
`;

export const AvatarImg = styled.div`
    border-radius: 100%;
    height: 70px;
    width: 70px;
    padding: .5rem;
`;

export const Image = styled.img`
    max-width: 100%;
    min-height: 100%;
    border-radius: 100%;
`;

export const LinkedInBtn = styled.div`
    color: #fff;
    font-size: 40%;
    padding: .7rem 1rem;
    background: #0077B5;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 1rem;
    border-radius: 10px;
`;

export const StyledText = styled(Text)`
    color: #000;
    ${({color}) => color && `color: ${color};`}
`;