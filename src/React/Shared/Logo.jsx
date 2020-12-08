import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Logo = () => {

    return (
        <LogoStyled className='Logo'>
        <Link to='/'>
            <img src="/assets/img/Amity Logo.jpg" alt="Amity-Hair-Logo"/>
        </Link>
        </LogoStyled>
    );
}

export default Logo;

const LogoStyled = styled.div`

    margin-left: -20px;

    img {
        max-width: 300px;
    }

    @media (max-width: 500px) {

        margin-left: -30px;

        img {
            width: 200px;
        }
    }

    @media (max-width: 350px) {

        padding-top: 5px;

        img {
            width: 170px;
        }
    }
`;