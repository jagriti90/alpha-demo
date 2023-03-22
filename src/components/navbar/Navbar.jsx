import React from 'react';
import './Navbar.css';
// import {useState} from 'react';

const Navbar = () => {
  return (
   <>
   <div className='gpt__navbar'>
    <div className='gpt__navbar-link'>
      <div className='gpt__navbar-link-logo'>
<p className='logo_name'>Perfectland</p>
      </div>
      <div className='gpt__navbar-links_container'>
        <p><a href='#home'>Home</a></p>
        <p><a href='#Possibility'>About</a></p>
        <p><a href='#my bookings'>Services</a></p>
        <p><a href='#my bookings'>Contact</a></p>
        
      </div>
    </div>
    <div className='gpt__navbar-sign'>
    <button  type='button'>Sign in</button>
      <button  className='gpt_button' type='button'>Sign up</button>
    </div>
    
    <div className='gpt__navbar-menu'>

    </div>
   </div>
   </>
  )
}

export default Navbar