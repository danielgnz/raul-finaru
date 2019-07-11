import React from 'react';
import styled from 'styled-components';


const ContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    ${({height}) => height && `height: ${height}vh`}
    ${({width}) => width && `width: ${width}vw`}
    ${({center}) => center && `justify-content: center; align-items: center;`}
    ${({bgColor}) => `background: ${bgColor ? bgColor : `#000`};`}
    ${({color}) => `color: ${color ? color : `#fff`};`}

`;


export const Container = ({...otherProps }) => (
    <ContainerStyle {...otherProps} />
);

export default Container;