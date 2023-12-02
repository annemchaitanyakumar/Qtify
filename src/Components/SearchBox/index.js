import React from 'react';
import './searchbox.css';
import Menu from '../Menu';

export default () => {
  return (
    <div style={{
      position:'relative'
    }}>
    <form className='form'>
        <input type="search" className="searchbox" placeholder="Search an Album of Your Choice" />
      <button className='searchiconbtn' type="submit">
        <img src="./Search-icon.svg" alt="Search Icon" className='searchicon'/>
      </button>
    </form>
    {/* <Menu data={[1,2,3,4,5,6,7,8]}/> */}

    
    </div>

  );
};
