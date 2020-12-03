import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/

const Essay = (props) => {

    const {
        essay
    } = props;

    const {
        title,
        question,
        AnswerComponent,
    } = essay;

    return (
    <EssayStyled>
    <h3>{ title }</h3>
    <div className="questions"><b>{ question }</b></div>
    <AnswerComponent/>
    </EssayStyled>

    // ... if there is no const above to include all essay component

    /* <div>
    <h3>{ essay.title }</h3>
    <div className="questions">{ essay.question }</div>
    <essay.AnswerComponent/>
    </div> */

    );
}

export default Essay;

const EssayStyled = styled.div`

border: solid 1px gray;
padding: 20px;
margin: 20px 0px;

`;

