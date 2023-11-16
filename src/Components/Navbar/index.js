import React from 'react';
import SearchBox from '../SearchBox/index';
import Button from '../Button/index'
import './navbar.css'

export default () => {
  return (
    <div className='navbar'>
        <img src="Logo.png" id='logo'/>
        <SearchBox />
        <Button>Give Feedback</Button>
    </div>
  );
};

