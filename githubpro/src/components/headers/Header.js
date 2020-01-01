import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';


const Header = ({logo}) => (
    <header className='App-header'>
    
     <p>
       Edit <code>src/App.js</code> and save to reload.
     </p>
     <a
       className='App-link'
       href='https://reactjs.org'
       target='_blank'
       rel='noopener noreferrer'
     >
       Learn React
     </a>
 </header>

)


// Header.PropTypes{

//   title:PropTypes.string

// }.isrequired;

export default Header;