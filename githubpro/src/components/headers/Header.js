import React from 'react';
import './Header.css';
// import PropTypes from './node_modules/prop-types';
import Link from '../Link/Link'
import logo from '../../images/Octocat.png';

const Header = () => (
    <header className='App-header'>
    
    <img className="logo"src={logo} alt="this is the logo" />

    <h1>
      My Github Portfolio
    </h1>
     


 </header>

)


// Header.PropTypes{

//   title:PropTypes.string

// }.isrequired;

export default Header;