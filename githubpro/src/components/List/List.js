import React from 'react';
import styled from 'styled-components';


const ListWrapper = styled.ul `
list-style:none;
text-align:center;
padding:0;
`

const ListItem = styled.li`
display:flex;
justify-content:space-between;

`;

const Label = styled.span`
   font-weight:strong;
`;

const List = ({items,title}) => (

    

    <ListWrapper>
    <h1>{title}</h1>
        
                 

    { items.map(item =>
    <>
          
        <ListItem key={item.label}>
            <strong>{item.label}</strong>
            {item.value}
    </ListItem>
    </>)}
    </ListWrapper>
)



export default List;