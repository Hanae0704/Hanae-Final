import React from 'react';
import styled from 'styled-components';

const BidThanks = () => {

    return (
        <BidThanksStyled className='BidThanks'>
            <div className="thankyou">Thank you for the appointment!</div>
            <img src="/assets/img/thankyou.gif" alt="ThankYou"/>
        </BidThanksStyled>
    );
}

export default BidThanks;

const BidThanksStyled = styled.div`
    font-size: 25px;
    color: #de6444;

    img {
        max-width: 90%;
    }
    
    @media (max-width: 500px) {
        .thankyou {
            font-size: 18px;
        }
    }
`;