import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import keycode from 'keycode';

/* Script ---------------------------*/

import { useClickOutside } from 'common/useClickOutside.js';

/* Components ---------------------------*/
import Toggle from './Toggle.jsx';
import LogOut from './LogOut.jsx';
import Form from './Form.jsx';

const Login = () => {

    /*---------------------------
    | State and Props
    ---------------------------*/

    const { user } = useSelector((state) => state);

    const [ showForm, showFormUpdate ] = useState(false);

    /*---------------------------
    | Functions
    ---------------------------*/

    const toggleShowForm = () => {
        showFormUpdate(!showForm);
    }
    const hideForm = () => {
        showFormUpdate(false);
    }

    const bottomRef = useRef();
    useClickOutside(bottomRef, hideForm, ['#ToggleLoginButton']);

    /*---------------------------
    | LifeCycle
    ---------------------------*/

        useEffect(() => {
            const handleKeyDown = (event) => {
                switch(keycode(event)) {
                    case 'esc':
                        event.stopPropagation();
                        hideForm();
                        break;
    
                    default:
                        return false;
                }
            }
            document.addEventListener('keydown', handleKeyDown);
    
            // when component dismount
            return () => {
                document.removeEventListener('keydown', handleKeyDown);
            }
        }, []);

    /*---------------------------
    | Render
    ---------------------------*/

    return (
        <LoginStyled className='Login'>
            <div className="top">
                <Toggle onClick={ toggleShowForm }/>
            </div>
            {
                showForm &&
                <div className="bottom" ref={ bottomRef }>

                    {
                        user.isLoggedIn
                        ? <LogOut/>
                        : <Form/>
                    }
                </div>
            }
        </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`

    position: relative;
    text-align: center;

    .bottom {
        position: absolute;
        right: -21px;
        top: 55px;

        background-color: white;
        padding: 10px;
        border: solid 1px #ccc;

        width: 400px;
        z-index: 1000;

        @media (max-width: 500px) {
            right: -36px;
            top: 40px;
            padding: 5px;
            width: 290px;
            
            font-size: 12px;
        }
        

        &::before {
            content: " ";
            display: block;

            width: 0; 
            height: 0; 
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 10px solid #ccc;
            position: absolute;
            top: -11px;
            right: 15px;
            z-index: -2;
        }
        &::after {
            content: " ";
            display: block;

            width: 0; 
            height: 0; 
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 10px solid white;
            position: absolute;
            top: -10px;
            right: 15px;
            z-index: -1;
        }

    }
`;