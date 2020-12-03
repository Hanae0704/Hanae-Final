import React from 'react';
import styled from 'styled-components';

const BidThanks = () => {

    return (
        <BidThanksStyled className='BidThanks'>
            <h1>Thank you for your order!</h1>
        </BidThanksStyled>
    );
}

export default BidThanks;

const BidThanksStyled = styled.div`
    color: #de6444;
`;