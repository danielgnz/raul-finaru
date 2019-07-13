import React from 'react';

import Container from '../../../utils/components/Container';
import ReadMore from '../../../components/ReadMore/read-more.component';


export const Section5 = () => {
    return (
        <Container
            height="90"
            justifyContent="space-between"
            alignItems="center"
            color="#000"
            bgColor="#fff"
            style={{borderBottom: '1px solid #000'}}
        >
            <ReadMore 
                title="What is a High-Ticket Closer?"
                text="High-Ticket Closing™ is the art and skill of closing high-ticket offers.The psychology of conventional sales and High-Ticket Closing™ are worlds apart."
            />
            
             <ReadMore 
                title="How can Raul help you?"
                text="As a High-Ticket Closer™, Raul Finaru helps his High-Ticket Partners triple their sales by turning their qualified leads into high-paying customers."
            />

        </Container>
    )
}

export default Section5;