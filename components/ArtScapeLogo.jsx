import React from 'react'
import Link from 'next/link';
import { Lobster, Pacifico, Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['500'] });
const pacifico = Pacifico({ subsets: ['latin'], weight: ['400'] });

export default function ArtScapeLogo(props) {
    const { linkTag } = props
  return (
    <>
        {linkTag? (
                <Link href='/'
                    className='flex row'>
                    <img src='/artScapeLogo.png' className='h-[50px]'/>
                    <h3 className='text-[30px]'> <span className={'titleGradientPurple ' + pacifico.className}>Art</span><span className={'text-indigo-500 titleGradientRed ' + poppins.className}>Scape</span> </h3>
                </Link>
            ) : (
                <div 
                    className='flex row'>
                    <img src='/artScapeLogo.png' className='h-[50px]'/>
                    <h3 className='text-[30px]'> <span className={'titleGradientPurple ' + pacifico.className}>Art</span><span className={'text-indigo-500 titleGradientRed ' + poppins.className}>Scape</span> </h3>
                </div> 
            )}
    </>
  )
}
