import React from 'react';

export default function Header() {
  return (
    <header className="p-2 border">
      <div className='flex row'>
        <img src='/artScapeLogo.png' className='h-[50px]'/>
        <h3 className='text-[30px]'> ArtScape </h3>
      </div>
      <div></div>
      <div></div>
    </header>
  );
}
