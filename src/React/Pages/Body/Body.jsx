import React from 'react';
import styled from 'styled-components';

import Body2 from './Body2.jsx';
import {bodyData} from './bodyitems.js';
import {bodyData2} from './bodyitems2.js';


const Body = () => {


    const renderBody = () => {
        return bodyData.map((list, idk) =>  {
            return <Body2
            key = {idk}
            list = {list}
            />;
        });
    }

    const renderBody2 = () => {
        return bodyData2.map((list, idk) =>  {
            return <Body2
            key = {idk}
            list = {list}
            />;
        });
    }

    return (
        <BodyStyled className='Body'>
            <div><br></br><br></br><br></br></div>
            <div className="column column0">Why Amity Hair?</div>
            <div className="column column1">{ renderBody () }</div>
            <div className="column column1">{ renderBody2 () }</div>
            <div><br></br><br></br><br></br></div>
            <div className="column column2">About Us</div>
            <div><br></br></div>
            <div className="column column3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </BodyStyled>
    );
}

export default Body;

const BodyStyled = styled.div`

    .column0, .column2 {
        font-size: 35px;
        text-align: center;
        color: #de6444;
        text-decoration: underline;

        @media (max-width: 500px) {
            font-size: 25px;
        }

    }

    .column1 {
        flex-wrap: wrap;
        font-family: futura-pt, sans-serif;
        font-weight: 300;
        font-style: normal;

        img {
            margin-bottom: 10px;
            margin-top: 20px;
        }
    }

    .column3 {
        color: gray;
        font-family: futura-pt, sans-serif;
        font-weight: 300;
        font-style: normal;

        max-width: 1000px;
        display: inline-block;

        padding: 0px 25px;

        margin-bottom: 50px;

        @media (min-width: 500px) {
            padding: 0px 40px;
        }
    }

`;