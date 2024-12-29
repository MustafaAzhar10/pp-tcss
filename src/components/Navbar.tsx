import React, { useState } from 'react';
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Function to toggle the menu open/closed
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center'>
        {/* Logo Section */}
        <div className='text-xl font-medium'>M.MUSTAFA</div>
        
        {/* Desktop Navbar Links - Visible on medium screens and up */}
        <ul className='gap-10 lg:gap-16 hidden md:flex'>
          <li className='menulink'><a href='#hero'><b>Home</b></a></li>
          <li className='menulink'><a href='#about'><b>About</b></a></li>
          <li className='menulink'><a href='#skills'><b>Skills</b></a></li>
          <li className='menulink'><a href='#contact'><b>Contact</b></a></li>
        </ul>

        {/* Mobile Menu Toggle Icon */}
        <div className='md:hidden' onClick={toggleMenu}>
          {/* Only show the menu icon */}
          {!isMenuOpen && <TiThMenu size={30} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
