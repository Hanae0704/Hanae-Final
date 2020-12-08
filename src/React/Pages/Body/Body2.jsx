import React from 'react';
import styled from 'styled-components';

const Body2 = ({list}) => {

    return (
        <Body2Styled className='Body2'>
            <img src = { list.image } alt = {list.name}/>
            <div className="description">{ list.name } </div>
        </Body2Styled>
    );
}

export default Body2;

const Body2Styled = styled.div`

display: inline-block;
padding: 0px 20px 0px 20px;

img {
    width: 200px;
    height: auto;
}

.description {
    text-align: center;
    color: gray;
    width: 200px;
}
    
`;