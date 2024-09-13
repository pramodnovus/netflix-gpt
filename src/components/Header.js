import React from 'react'
import Netflix_Logo_PMS from '../assets/images/Netflix_Logo_PMS.png';

const Header = () => {
  return (
    <div className='absolute w-48 px-8 py-2 bg-gradient-to-b from-black z-10 flex'>
        <img src={Netflix_Logo_PMS} alt="logo" />
    </div>
  )
}

export default Header