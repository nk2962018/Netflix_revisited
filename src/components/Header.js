import React from 'react'
import logo from '../Assests/Netflix_Logo_PMS.png';

const Header = () => {
  return (
    <div 
        className='absolute px-8 py-2 bg-gradient-to-b from-black'
    >
        <img className='w-44' src={logo} alt='logo'/>
    </div>
  )
}

export default Header