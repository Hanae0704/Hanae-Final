import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import * as UserActions from 'Redux/user/actions.js';

/* Components ---------------------------*/
import Button from '../UniversalForm/Controls/Button.jsx';

const LogOut = () => {

    const  dispatch = useDispatch();
    const { user } = useSelector((state) => state);

    const handleLogOut = () => {
        console.log('You clicked me');

        dispatch(UserActions.logOut());
    }

    return (
        <LogOutStyled className='LogOut'>
            <Button onClick={ handleLogOut }>
            Log {user.profile.first} out
            </Button>
        </LogOutStyled>
    );
}

export default LogOut;

const LogOutStyled = styled.div`
    text-align: center;
`;