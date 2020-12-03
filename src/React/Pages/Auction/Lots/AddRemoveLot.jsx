import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

/* Scripts ---------------------------*/ 
import { addLotToBids, removeLotToBids } from 'Redux/bidManager/actions.js';

/* Component ---------------------------*/
import Button from 'React/Shared/UniversalForm/Controls/Button.jsx';

const AddRemoveLot = ({lot}) => {

    const dispatch = useDispatch();

    const { bidManager: { current: { bids } }, user } = useSelector((state) => state);

    const isInBids = bids && bids.find((bid) => {
        return bid.lot.id === lot.id;
    });


    const handleOnClick = () =>  {
        console.log('Add Lot');
        dispatch(addLotToBids(lot));
    }

    const handleRemoveLot = () => {
        console.log('Remove Lot');
        dispatch(removeLotToBids(lot));
    }

    if (!user.isLoggedIn) { return ''; }

    return (
        <AddRemoveLotStyled className='AddRemoveLot'>

            {
                isInBids
                ? <Button onClick= {handleRemoveLot}>Remove</Button>
                : <Button onClick= {handleOnClick}>Add</Button>
            }
            
        </AddRemoveLotStyled>
    );
}

export default AddRemoveLot;

const AddRemoveLotStyled = styled.div`
=
`;