import React, {useEffect} from 'react';
import styled from 'styled-components';
import keycode from 'keycode';

/* Component ---------------------------*/
import Button from 'React/Shared/UniversalForm/Controls/Button.jsx';

const LightBox = ({children, isOpen, onClose, headerText}) => {

    // When component mounts
    useEffect(() => {
        const handleKeyDown = (event) => {
            switch(keycode(event)) {
                case 'esc':
                    event.stopPropagation();
                    onClose();
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
    }, [onClose]);

    const handleOnClose = () => {
        onClose();
    }
    
    const stopBubbling = (event) => {
        event.stopPropagation();
    }

    if (!isOpen) { return ''; }

    return (
        <LightBoxStyled className='LightBox' onClick={ handleOnClose }>

            <div className="theLight" onClick={ stopBubbling }>

                <header>
                    <h2>{headerText}</h2>
                </header>

                <Button className='closeLightbox' onClick={ handleOnClose }>
                    X
                </Button>

                <div className="content">
                { children }
                </div>

            </div>
        </LightBoxStyled>
    );
}

export default LightBox;

const LightBoxStyled = styled.div`

    outline: solid 1px orange;

    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;

    background-color: rgba(0,0,0,.75);

    .theLight {
        position: absolute;

        left: 50%;
        top: 50%;

        transform: translate(-50%, -50%);

        background-color: #ffffff;

        width: 300px;

        header {
            background-color: teal;
            color: white;
            padding: 10px;

            h2 {
                margin: 0px;
                font-size: 20px;
            }
        }

        .closeLightbox {
            position: absolute;
            right: 0px; top: 0px;
            margin: 0px;
        }
        
        .content {
            padding: 10px;
            min-height: 100px;
        }

    }
`;