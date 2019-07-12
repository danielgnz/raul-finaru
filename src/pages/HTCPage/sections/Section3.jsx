import React from 'react';

import Container from '../../../utils/components/Container';
import Text from '../../../utils/components/Text';

//images
import clickfunnels from '../../../assets/clickfunnels.jpg';
import decision from '../../../assets/decision-making.jpeg';
import doctor from '../../../assets/doctor.jpg';
import thankyou from '../../../assets/thank-you.png';


const classes = {
    text: {
        color: "#fff",
        size: "60",
        padding: "1",
    },
    heading: {
        size: "70",
        padding: "1",
        spacing: "0.05",
        weight: "600",
    },
    headline: {
        variant: "h1",
        align: "center",
        size: "100",
        color: '#ffe09f',
        spacing: '0.05'
    },
    listNumber: {
        fontSize: '90%',
        padding: '0.2rem 0.45rem',
        border: '3px solid #ffe09f',
        borderRadius: '100%',
        marginRight: '10px',
        fontWeight: '550',

    }
}

export const Section3 = () => {
    return (
            <Container bgColor="#000" center>

                <Container bgColor="#000" height="5" />

                <Text {...classes.headline}>
                    Why High Ticket Closing?
                </Text>

                <Text {...classes.text} align="center">
                    Take a look at advertisements on Facebook, Instagram and YouTube today. A lot of them revolve around ClickFunnels.
                </Text>

                <div>
                    <img alt='clickfunnels' src={clickfunnels} />
                </div>

                <Container bgColor="#000">
                    <Text {...classes.text}>
                        <span style={classes.listNumber}>1</span>
                        It often makes you register for a live or pre-recorded webinar
                    </Text>
                    <Text {...classes.text}>
                        <span style={classes.listNumber}>2</span>
                        The webinar provides some value or knowledge of said product/service (but not enough information)
                    </Text>
                    <Text {...classes.text}>
                        <span style={classes.listNumber}>3</span>
                        There is a “buy-it-now” offer at the end where it could redirect you to a sales page and you can make a purchase at a discounted price.
                    </Text> 
                </Container>

                <Container bgColor="#000">
                    <Text {...classes.text} align="center" weight="550">
                        However, it is often hard to generate sales just through that method.                    
                    </Text>
                    <Text {...classes.text}>
                        With just a dry webinar funnel, it is often hard to get potential prospects to pull out their wallets and lay down cash.
                    </Text>
                </Container>

                <Container bgColor="#fff">
                    <Text {...classes.text} align="center" weight="550" color="#000">
                        <cite>Humans make purchases based on emotions, then justify it with logic.</cite>
                    </Text>
                </Container>

                <Container bgColor="#000">
                    <Text align="center">
                        <img alt='buyer psychology' src={decision} />
                    </Text>
                    <Text {...classes.text}>
                        In order for them to feel an emotional need to buy, a human, another live soul, could create that urgency by closing them over the phone. 
                    </Text>

                    <Text {...classes.heading} align="center">
                        This is where <span style={{fontWeight: '550', color: '#F5CA7B'}}>High Ticket Closers™</span> come into play.
                    </Text>

                    <Text {...classes.text}>
                        Closers are purposefully placed at the end of the webinar, where potential prospects would be able to book and schedule a free consultation call with the Closer. 
                    </Text>

                    <Text {...classes.text}>
                        Highly trained and skilled in the art of influence and persuasion, a <span style={{fontWeight: '550', color: '#F5CA7B'}}>High Ticket Closer™</span> helps prospects connect with their vision and goals, and helps them to make a commitment to invest in themselves, by buying High Ticket products or services.
                    </Text>

                    <Text align="center">
                        <img alt='doctor' src={doctor} />
                    </Text>

                    <Text {...classes.text}>
                        Closers operate in a similar fashion to doctors and psychologists; they ask the right questions at the right time to get to the root of the pain.
                    </Text>

                    <Text {...classes.text}>
                        The secret here is that <span style={{fontWeight: '550', color: '#F5CA7B'}}>High Ticket Closers™</span> don't actually sell to prospects.
                    </Text>

                    <Text {...classes.text}>
                        Instead, Closers will ask them the right questions to understand their deepest needs, goals and dreams they want to achieve and to discover their biggest pains and challenges they want to solve.
                    </Text>

                    <Text {...classes.text}>
                    The  <span style={{fontWeight: '550', color: '#F5CA7B'}}>High Ticket Closer™</span> will then prescribe a solution which is essentially the High Ticket product or service.
                    </Text>

                    <Text {...classes.text}>
                        The Closer then closes the prospect on purchasing said product or service through rapport, and the emotional need to solve their pain.
                    </Text>

                    <Text {...classes.text}>
                        By doing so, prospects will never feel intimidated, nervous or defensive when dealing with <span style={{fontWeight: '550', color: '#F5CA7B'}}>High Ticket Closers™</span>.
                    </Text>

                    <Text {...classes.text}>
                        In fact, prospects will usually thank the Closer at the end of the call.
                    </Text>

                    <Text align="center">
                        <img alt='thank you' src={thankyou} />
                    </Text>

                    <Text {...classes.text} align="center">
                        The Closers’ ability to do this frees up an influencer’s, thought-leader’s or entrepreneur’s free time to stay focused on their businesses, or perhaps working in their businesses, but on some other aspect outside of sales.
                    </Text>

                </Container>

            </Container>
    )
}

export default Section3;