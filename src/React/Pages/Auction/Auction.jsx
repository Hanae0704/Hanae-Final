import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

/* Components ---------------------------*/
import Lots from './Lots/Lots.jsx';
import BidManager from './BidManager/BidManager.jsx';
import BidThanks from './BidThanks.jsx';

const Auction = () => {

    const { user } = useSelector((state) => state);

    return (
        <AuctionStyled className='Auction'>
            {
                    !user.isLoggedIn &&
                    <h2>Login to add to your cart</h2>
            }
            <Switch>
                <Route path='/auction/bids' component={ BidManager }/>
                <Route path='/auction/thanks' component={ BidThanks }/>
                <Route path='/auction/' component={ Lots } exact/>
            </Switch>
            {
                    user.isLoggedIn &&
                    <NavLink className='NavLink' to ='/auction/bids'>View in your cart</NavLink>
            }
        </AuctionStyled>
    );
}

export default Auction;

const AuctionStyled = styled.div`
    text-align: center;

    h2 {
        color: #de6444;
    }

    .NavLink {
        margin-top: 40px;
    }
    
    a {
        display: inline-block;

        width: 250px;
        line-height: 60px;

        background-color: #eeeeee;
        
        border-radius: 5px;
        color: #3a3a3a;

        text-decoration: none;
        font-size: 20px;
        text-align: center;
        margin: 0px 5px;

        &:hover {
            background-color: #d3cfcf;
        }
        &.active {
            background-color: #ee5d37;
            color: white;
        }
    }
`;