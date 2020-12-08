import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Body from './Body/Body.jsx';

const Home = () => {

    return (
        <HomeStyled className='Home'>
            <Helmet>
            <title>Amity Hair | Los Angeles</title>
            </Helmet>
            <div className="box">
            <img src="/assets/img/home-slides/1.jpg" alt="Home"/>
            <div className="text">- Welcome to Amity Hair -</div>
            </div>
            <Body/>
        </HomeStyled>
    );
}

export default Home;

const HomeStyled = styled.div`

    text-align: center;

    img {
        max-width: 100%;
    }

    .box{
        position: relative;
        display: inline-block; 
    }
    .box .text{
        position: absolute;
        z-index: 999;
        margin: 0 auto;
        left: 0;
        right: 0;        
        text-align: center;
        top: 40%; /* Adjust this value to move the positioned div up and down */
        background: rgba(250, 160, 42, 0.8);
        color: white;

        padding: 37px 0px;
        margin:  0px -20px;

        @media (max-width: 850px) {
            top: 35%;
            padding: 30px 0px;
        }

        @media (max-width: 550px) {
            padding: 20px 0px;
        }

        @media (max-width: 470px) {
            padding: 10px 0px;
        }
    }

    .text {
        font-size: 30px;
        font-weight: 400;

        @media (max-width: 850px) {
            font-size: 25px;
        }

        @media (max-width: 470px) {
            font-size: 18px;
        }
    }
    
`;