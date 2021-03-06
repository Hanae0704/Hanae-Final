import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

/* Components ---------------------------*/
import Bids from './Bids/Bids.jsx';

const BidManager = () => {

    const { bidManager: { current: { bids } } } = useSelector ((state) => state);

    return (
        <BidManagerStyled className='BidManager'>
            
            {
                (bids && bids.length > 0)
                ? <Bids bids={ bids }/>
                : `Currently you have no item in your cart.`
            }
            <NavLink className='NavLink' to ='/auction/' exact>Go back</NavLink>
            <br></br>
        </BidManagerStyled>
    );
}

export default BidManager;

const BidManagerStyled = styled.div`
    
    .NavLink {
        background-color: #eee;
        color: #de6444;
        margin-bottom: 40px;

        display: inline-block;

        width: 150px;
        line-height: 30px;
        font-size: 16px;

        &:hover {
            background-color: #ddd;
        }
    }
`;