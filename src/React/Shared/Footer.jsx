import React from 'react';
import styled from 'styled-components';

/* Component ---------------------------*/
import Logo from './Logo.jsx';

const Footer = () => {

    return (
        <FooterStyled className='Footer'>
            <Logo/>
            <div className="copyright">
                &copy; Amity Hair  |  All Right Reserved.
            </div>
        </FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.footer`

    img {
        max-width: 180px;
    }
        text-align: center;
        padding: 50px 20px;
        /* border-top: solid 1px #eee; */
        color: #333;
        font-size: 11px;
`;