import React from 'react';
import styled from 'styled-components';

/* Component ---------------------------*/
import Input from '../Controls/Input.jsx';
import Textarea from '../Controls/Textarea.jsx';

const LabelInput = ({formField}) => {

    let ControlComponent;

    switch (formField.type) {
        case 'textarea':
            ControlComponent = Textarea;
            break;
        default:
            ControlComponent = Input;
            break
    }

    return (
        <LabelInputStyled className='LabelInput'>
            <div className="label-container">
            <label htmlFor={formField.id}> {formField.label} </label>
            </div>

            <div className="control">
                <ControlComponent formField={formField} />
            </div>
        </LabelInputStyled>
    );
}

export default LabelInput;

const LabelInputStyled = styled.div`

    display: flex;

    .label-container {
        flex: 0 0 30%;
        text-align: left;
        padding: 10px;
    }
    label {
        font-size: 16px;
        font-weight: bold;
    }
    .control {
        flex: 0 0 70%;
        padding: 10px;
    }

    @media (max-width: 500px) {

        label {
            font-size: 13px;
            font-weight: bold;
        }
    }
    
`;