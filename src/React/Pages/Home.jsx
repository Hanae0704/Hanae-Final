import React from 'react';
import styled from 'styled-components';

const Home = () => {

    return (
        <HomeStyled className='Home'>
            <img src="/assets/img/home-slides/1.jpg" alt="Home"/>
        </HomeStyled>
    );
}

export default Home;

const HomeStyled = styled.div`

    img {

        max-width: 100%;
        margin: 0px;
    }
    
`;