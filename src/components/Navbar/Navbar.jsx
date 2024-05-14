import React, { useState } from 'react';
import './Navbar.css';

import { AiOutlineHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { CiBookmarkCheck } from "react-icons/ci";
import { TbMessage2 } from "react-icons/tb";
// import { GrServices } from "react-icons/gr";

const Navbar = () => {

  const [activenav, setactivenav] = useState('#')
  return (
    <nav>
      <a href='/#' onClick={() => setactivenav('#')}  className={activenav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setactivenav('#about')}  className={activenav === '#about' ? 'active' : ''}><FaUser/></a>
      <a href='#experience' onClick={() => setactivenav('#experience')}  className={activenav === '#experience' ? 'active' : ''}><CiBookmarkCheck/></a>
      {/* <a href='#services' onClick={() => setactivenav('#services')}  className={activenav === '#services' ? 'active' : ''} ><GrServices /></a> */}
      <a href='#contact'  onClick={() => setactivenav('#contact')}  className={activenav === '#contact' ? 'active' : ''}><TbMessage2/></a>
    </nav>
  )
}

export default Navbar
