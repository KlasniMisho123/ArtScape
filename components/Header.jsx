import React from 'react';
import NavElement from './NavElement';

export default function Header() {
  return (
    <header className="py-2 px-6 border w-full flex justify-between ">
      <div className='flex row'>
        <img src='/artScapeLogo.png' className='h-[50px]'/>
        <h3 className='text-[30px]'> <span>Art</span><span className='text-indigo-500 '>Scape</span> </h3>
      </div>
      
      <nav className='flex p-2 gap-2 justify-evenly  min-w-[500px]'>
        <NavElement title="Gallery" link="/gallery" />  
        <NavElement title="Support" link="/Support" />  
        <NavElement title="Explore" link="/Explore" />  
      </nav>
        <div className=" p-0 w-12 h-12 overflow-hidden rounded-full">
          <img
          className='w-full h-full object-cover' 
          src='ProfilePicDemo.gif'
          alt='Profile Picture Animation' />
        </div>
    </header>
  );
}
