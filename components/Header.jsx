import React from 'react';

export default function Header() {
  return (
    <header className="py-2 px-6 border w-full flex justify-between ">
      <div className='flex row'>
        <img src='/artScapeLogo.png' className='h-[50px]'/>
        <h3 className='text-[30px]'> <span>Art</span><span className='text-indigo-500 '>Scape</span> </h3>
      </div>
      
      <div className='flex p-2 gap-6 justify-between  min-w-[500px]'>
        <button> Gallery </button>
        <button> Explore </button>
        <button> Support </button>
        <div className="w-16 h-16 overflow-hidden rounded-full">
          <img
          className='w-full h-full object-cover' 
          src='ProfilePicDemo.gif'
          alt='Profile Picture Animation' />
        </div>
      </div>
      
    </header>
  );
}
