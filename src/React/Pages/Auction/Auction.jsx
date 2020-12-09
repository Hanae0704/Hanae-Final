import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Helmet from 'react-helmet';

/* Components ---------------------------*/
import Lots from './Lots/Lots.jsx';
import BidManager from './BidManager/BidManager.jsx';
import BidThanks from './BidThanks.jsx';

const Auction = () => {

    const { user } = useSelector((state) => state);

    return (
        <AuctionStyled className='Auction'>
            <Helmet>
            <title>Appointment | Amity Hair</title>
            </Helmet>
            {
                    !user.isLoggedIn &&
                    <h2>LOGIN TO ADD TO YOUR CART</h2>
            }
            <Switch>
                <Route path='/auction/bids' component={ BidManager }/>
                <Route path='/auction/thanks' component={ BidThanks }/>
                <Route path='/auction/' component={ Lots } exact/>
            </Switch>
        </AuctionStyled>
    );
}

export default Auction;

const AuctionStyled = styled.div`
    text-align: center;

    h2 {
        color: #de6444;
    }

    .cart {
        margin-top: 40px;
    }
    
    a {
        display: inline-block;

        width: 250px;
        line-height: 60px;

        background-color: #de6444;
        
        border-radius: 5px;
        color: white;

        text-decoration: none;
        font-size: 20px;
        text-align: center;
        margin: 0px 5px;

        &:hover {
            background-color: #ee5d37;
        }
        &.active {
            background-color: #ee5d37;
            color: white;
        }
    }
`;