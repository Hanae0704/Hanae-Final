import React from 'react';
import styled from 'styled-components';

/* Component ---------------------------*/
import Button from '../UniversalForm/Controls/Button.jsx';

const Toggle = ({onClick}) => {

    return (
        <ToggleStyled className='Toggle'>
            <Button 
                id='ToggleLoginButton'
                onClick={ onClick }
                unstyled={ true }
            >
                <img src="/assets/img/Login.png" alt="Login"/>
            </Button>
        </ToggleStyled>
    );
}

export default Toggle;

const ToggleStyled = styled.div`

    margin-top: 15px;

    .Button {
        width: 50px;
        height: 50px;

        display: flex;
        justify-content: center;
        align-items: center;

        opacity: .85;

        &:hover {
            opacity: 1;
        }

        img {
            width: 120%;
            height: auto;
        }
    }
`;