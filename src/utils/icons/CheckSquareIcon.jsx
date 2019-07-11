import React from 'react';

export default function CheckSquareIcon({color, marginRight, ...otherProps}) {

    return <div className="fas fa-check-square"
            style={{
                color: `${color}`,
                marginRight: `${marginRight}`,
            }}/>
}