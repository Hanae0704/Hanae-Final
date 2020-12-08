import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

/* Redux ---------------------------*/
import { useSelector } from 'react-redux';

/* Component ---------------------------*/
import Lot from './Lot.jsx';

const Lots = () => {

    const { auction, user } = useSelector((state) => state);

    return (
        <LotsStyled className='Lots'>
            <div className="lots-container">
            {
                auction.current.lots.map((lot, idx) => {
                    return <Lot 
                            key={idx} 
                            lot={lot} 
                            auctionID={auction.current.id}/>
                })
            }
            </div>
            {
                    user.isLoggedIn &&
                    <NavLink className="cart" to ='/auction/bids'>VIEW IN YOUR CART</NavLink>   
            }
        </LotsStyled>
    );
}

export default Lots;

const LotsStyled = styled.div`

.lots-container{

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 40px;
    
}
    
`;
