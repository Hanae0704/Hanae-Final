import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = () => {

    return (
        <NavStyled className='Nav'>
            <NavLink to='/' exact>HOME</NavLink>
            <NavLink to='/auction'>APPOINTMENT</NavLink>
            <NavLink to='/contact'>CONTACT</NavLink>
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    padding-top: 20px;
    padding-bottom: 40px;


    a {
        display: block;
        flex: 0 0 150px;

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
    }

`;