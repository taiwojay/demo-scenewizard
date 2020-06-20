import React from 'react';
import './Nav.css'


const Nav =() => {
  return(
    <nav>
        
        <div class="topnav" >
       
        <ul>
        <a className='title'>Scene Wizard</a>
          <a className='navel' href="#home">Home</a>
          <a className='navel' href="#categories">Categories</a>
          <a className='navel' href="#signin">Sign In</a>
        </ul>
    </div>
  </nav>
  );
}

export default Nav;