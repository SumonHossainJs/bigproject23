import React from 'react';
import './Navbar.scss';
import { Logo, notification, appIcon, SettingIcon, expandIcon, searchIcon, } from '../../../public/index';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src={Logo} alt="Logo Image" />
        <span>ADashoard</span>
      </div>
      <div className="icons">
        <img src={searchIcon} alt=""className='icon' />
        <img src={appIcon} alt="" className="icon" />
        <img src={expandIcon} alt="" className="icon" />
        <div className="notification">
          <img src={notification} alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://images.unsplash.com/photo-1693924198149-e14ff98ed3f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="" />
          <span>Jane</span>
        </div>
        <img src={SettingIcon} className='icon' alt="" />
      </div>
    </div>
  )
}

export default Navbar