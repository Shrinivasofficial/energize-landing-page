import React, { useState } from 'react';
import LOGO from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-200">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="w-10 h-10 mr-2" src={LOGO} alt="Energize" />
            <span className="text-xl tracking-tight">Energize</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="text-gray-700 hover:text-gray-900">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className='hidden lg:flex justify-center space-x-4 items-center'>
            <button className='py-2 px-3 border rounded-md'>
              Sign In
            </button>
            <button className='py-2 px-3 bg-gradient-to-r from-orange-300 to-orange-600 text-white rounded-md'>
              Register Now
            </button>
          </div>
          <div className='lg:hidden flex items-center'>
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className='fixed top-0 right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
            <button className='self-end mb-4' onClick={toggleNavbar}>
              <X className="text-white" />
            </button>
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={index} className='py-4'>
                  <a href={item.href} className="text-white text-lg">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className='flex space-x-6 mt-4'>
              <button className='py-2 px-3 border rounded-md text-white'>
                Sign In
              </button>
              <button className='py-2 px-3 bg-gradient-to-r from-orange-300 to-orange-600 text-white rounded-md'>
                Register Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
