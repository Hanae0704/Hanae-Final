import React, {useContext} from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from './context/index.js';
import * as UFActions from './context/action.js';

const Form = ({children}) => {


    const { state, dispatch } = useContext(Context);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        UFActions.handleOnSubmit(state, dispatch);
    }

    return (
        <FormStyled onSubmit={handleOnSubmit} className='Form'>
            {children}
        </FormStyled>
    );
}

export default Form;

const FormStyled = styled.form`

    text-align: center;
    max-width: 500px;
    margin: 0px auto;
    background-color: #fcfcfc;
    padding: 20px;
    border: solid 1px #ccc;

    @media (max-width: 500px) {
        max-width: 600px;
        padding: 10px 5px;
        }
    
`;