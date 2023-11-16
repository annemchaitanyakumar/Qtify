import React from 'react';
import './searchbox.css';

export default () => {
  return (
    <form className='form'>
  <input type="search" className="searchbox" placeholder="Search an Album of Your Choice" />
  <button className='searchiconbtn' type="submit">
    <img src="./Search-icon.svg" alt="Search Icon" className='searchicon'/>
  </button>
</form>

  );
};
