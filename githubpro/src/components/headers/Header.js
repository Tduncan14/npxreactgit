import React from 'react';
import styled from 'styled-components';
// import PropTypes from './node_modules/prop-types';
import logo from '../../images/Octocat.png';


const HeaderWrapper = styled.div`

background-color:#282c34;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
font-size:cal(10px + 2vmin)
color:white;
`

const Logo = styled.img`
height:64px;
pointer-events:none;
margin-top:10px;`;


const Header = () => (
    <HeaderWrapper>
    
    <Logo className="logo"src={logo} alt="this is the logo" />

    <h1>
      My Github Portfolio
    </h1>
     


 </HeaderWrapper>

)


// Header.PropTypes{

//   title:PropTypes.string

// }.isrequired;

export default Header;