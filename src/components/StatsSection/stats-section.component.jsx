import React from 'react';

import {
    Container,
    StatsGroup,
    StatsFigures,
    StatsInfo,
} from './stats-section.style';

export const StatsSection = () => {
    return (
        <Container>
            <StatsGroup>
                <StatsFigures>
                    $108.6M
                </StatsFigures>
                <StatsInfo >
                    Worth of Warehouse Equipment Sold
                </StatsInfo>
            </StatsGroup>

            <StatsGroup>
                <StatsFigures>
                    463
                </StatsFigures>
                <StatsInfo >
                    Pick & Packer Videos Uploaded on YouTube
                </StatsInfo>
            </StatsGroup>

            <StatsGroup>
                <StatsFigures>
                    3,123
                </StatsFigures>
                <StatsInfo >
                    Hours of Loading & Unloading Lorries
                </StatsInfo>
            </StatsGroup>
                
        </Container>
    )
}

export default StatsSection;