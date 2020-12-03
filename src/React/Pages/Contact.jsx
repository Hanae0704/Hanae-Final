import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import UniversalForm from 'React/Shared/UniversalForm/UniversalForm.jsx';

const Contact = () => {

    const defaultData = [
        { id: 'email', value: '', required: true, label: 'Email', type: 'email', },
        { id: 'message', value: '', required: false, label: 'Message', type: 'textarea', },

    ];

    const handleOnSubmit = (apiResponse) => {
        console.log('Login Form', apiResponse);
    }

    return (
        <ContactStyled className='Contact'>
            <UniversalForm 
                formData={ defaultData } 
                submitText='Email Us'
                apiEndpoint='/email/send'
                onSubmit={ handleOnSubmit }
            />
        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`
    
`;