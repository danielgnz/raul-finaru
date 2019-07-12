import React from 'react';

export default function CheckSquareIcon({color, marginRight, ...otherProps}) {

    return <div className="far fa-check-circle"
            style={{
                color: `${color}`,
                marginRight: `${marginRight}`,
            }}/>
}