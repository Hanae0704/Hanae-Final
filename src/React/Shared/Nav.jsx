import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBars,
} from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

    const [showMenu, showMenuSet] = useState(false);

    const toggleMenu = () => {
        showMenuSet(!showMenu);
    }

    useEffect(()=> {

        const handleWindowSizeChange = () => {
            const isItMobile = window.matchMedia(`(max-width: 499px)`);
            console.log(isItMobile.matches);

            showMenuSet(!isItMobile.matches);
        }
        
        handleWindowSizeChange();

        window.addEventListener(`resize`, handleWindowSizeChange);

        return () => {
            window.removeEventListener(`resize`, handleWindowSizeChange);
        }
        
    }, []);

    return (
        <NavStyled className='Nav'>
            <div className="hamburger"
                onClick={ toggleMenu } >
                <FontAwesomeIcon icon={ faBars } />
            </div>
        {
            showMenu&&

            <div className="links">
            <NavLink to='/' exact>HOME</NavLink>
            <NavLink to='/auction'>APPOINTMENT</NavLink>
            <NavLink to='/contact'>CONTACT</NavLink>
            </div>
        }
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`

    justify-content: center;
    padding-top: 10px;
    padding-bottom: 40px;

    @media (min-width: 500px) 
        {
            display: flex;
        }

    @media (max-width: 500px) 
        {
            padding-top: 0px;
            padding-bottom: 0px;
            margin-bottom: 20px;

        }
    
    a {

        display: inline-block;
        /* flex: 0 0 150px; */
        padding-left: 30px;
        padding-right: 30px;
        margin-right: 5px;
        background-color: #eee;
        font-size: 14px;
        color: #de6444;
        text-align: center;
        text-decoration: none;
        height: 40px;
        line-height: 40px;

        &:hover {
            background-color: #ddd;
        }
        &.active {
            background-color: #de6444;
            color: white;
        }
        &:last-child {
            margin-right: 0px;
        }

        @media (max-width: 499px) 
        {
            display: block;
            padding: 0px;
            margin-right: 0px;
        }
    }

    .hamburger {
        position: absolute;
        right: 70px;
        top: 40px;
        
        cursor: pointer;

        svg {
        color: #de6444;
        width: 25px;
        height: auto;
        }

        @media (min-width: 500px) {
            display: none;
        }

    }

`;
