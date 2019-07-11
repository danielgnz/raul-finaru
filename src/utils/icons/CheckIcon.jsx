import React from 'react';

export default function CheckIcon({color, marginRight, ...otherProps}) {

    return <div className="fas fa-check"
            style={{
                color: `${color}`,
                marginRight: `${marginRight}`,
            }}/>
}