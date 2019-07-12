import React from 'react';

export default function CheckSquareIcon({color, marginRight, ...otherProps}) {

    return <div className="far fa-angry	"
            style={{
                color: `${color}`,
                marginRight: `${marginRight}`,
            }}/>
}