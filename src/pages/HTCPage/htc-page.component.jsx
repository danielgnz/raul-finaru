import React from 'react';

import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';

export const HTCPage = () => {
    return (
        <div className="htc-page">
            <Section1 />
            <Section2 />
            <Section3 />
        </div>
    )
}

export default HTCPage;