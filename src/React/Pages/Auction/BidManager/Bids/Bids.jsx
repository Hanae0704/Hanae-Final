import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

/* Script ---------------------------*/
import * as BidManagerActions from 'Redux/bidManager/actions.js';

/* Component ---------------------------*/
import Bid from './Bid.jsx';
import Button from 'React/Shared/UniversalForm/Controls/Button.jsx';

const Bids = ({bids}) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmitBids = () => {
        dispatch(BidManagerActions.submitBids(handleRedirect));
    }

    const handleRedirect = () => {
        console.log('Hello redirect');
        history.push('/auction/thanks');
    }

    return (
        <BidsStyled className='Bids'>
            <h3>Your Appointment:</h3>
            {
                bids.map((bid, idx) => {
                     return <Bid key= { idx } bid={ bid } />
                })
            }

            <Button onClick={ handleSubmitBids }><b>Check Out</b></Button>
        </BidsStyled>
    );
}

export default Bids;

const BidsStyled = styled.div`
    .Button {
        background-color: #de6444;
        margin-top: 30px;
        width: 150px;
        height: 45px;


        &:hover {
            background-color: #ee5d37;
        }
    }
`;