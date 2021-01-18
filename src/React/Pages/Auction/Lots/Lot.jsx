import React, { useState } from 'react';
import styled from 'styled-components';

/* Component ---------------------------*/
import AddRemoveLot from './AddRemoveLot.jsx';
import LightBox from 'React/Shared/LightBox.jsx';

const Lot = ({lot, auctionID}) => {


    const [isOpen, isOpenUpdate] = useState(false);

    const handleOnOpen = () => {
        isOpenUpdate(true);
    }

    const handleOnClose = () => {
        isOpenUpdate(false);
    }
    
 
    return (
        <LotStyled className='Lot'>
            <div className="box">
                    <h3 onClick= { handleOnOpen } >{ `${lot.title}` }</h3>
                    <h3 className="price">Price: { lot.price }</h3>
                    <AddRemoveLot className="addremove" lot={ lot }/>
            </div>

            <LightBox
                isOpen = { isOpen } 
                onClose={ handleOnClose }
                headerText={ `${lot.title}` }
            >
            
            <img src={`/assets/img/auctions/${auctionID}/lots/small/${lot.images.small}`} alt={lot.title}/>
            <h3>{ `${lot.title}` }</h3>
            <div className="artist"><b>Price: </b> { lot.price } </div>
            <br></br>
            <AddRemoveLot lot={ lot }/>

            </LightBox>
        </LotStyled>
    );
}

export default Lot;

const LotStyled = styled.div`

    @media (max-width: 370px) {
        font-size: 12px;
    }

    img {
        max-width: 100%;
    }

    .box {
        display: flex;
        justify-content: center;
        margin: 0 10px;
    }

    .price {
        margin-left: 10px;
    }

    flex: 0 1200px;
    margin: 0px 10px 10px;

    border-bottom: solid 1px #eee;

    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 7px rgba(0,0,0, .05);
    }

    .LightBox {
        .AddRemoveLot {
            .Button {
                display: block;
                width: 100%;
                margin: 10px 0px 0px;
            }
        }
    }

`;