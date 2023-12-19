import React from 'react'

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      <div className='flex items-center'>
        <img alt="header-logo" src="https://fakestoreapi.com/icons/logo.png"  className='w-8 h-8 mr-2' />
          </div>
          
          <nav className='flex items-center'>
              <a href='#'  className='text-white mx-10 pr-5' >Home</a>
              <a href='#' className='text-white mx-10 pr-5' >Products</a>
              <a href='#' className='text-white mx-10 pr-5' >Contact</a>
          </nav>
    </header>
  );
}

export default Header;