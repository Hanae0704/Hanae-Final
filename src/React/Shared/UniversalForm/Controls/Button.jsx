import React from 'react';
import styled from 'styled-components';

const Button = ({id, onClick, children, type='button', className='', unstyled=false,}) => {

    const ButtonStyled = (unstyled) ? ButtonUnstyled : ButtonWithStyles;

    return (
        <ButtonStyled 
            id= { id }
            className={`Button ${className}`}
            onClick={ onClick }
            type={ type }
        >
            {children}
        </ButtonStyled>
    );
}

export default Button;

const ButtonWithStyles = styled.button`

    background-color: #f19e37;
    color: white;

    display: inline-block;
    margin: 10px;
    padding: 8px 15px;
    /* border-radius: 10px; */

    border: none;
    outline: none;

    box-shadow: 3px 3px 5px rgba(0,0,0,.3);

    &:active {
        box-shadow: 0px 0px 10px rgba(0,0,0,.3);
    }

    &:focus {
        background-color: #ee5b37;
    }

`;

const ButtonUnstyled = styled.button`

    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;

    &:active, &:focus {
        outline: solid 1px blue;
    }

`;