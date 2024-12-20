import React from 'react'
import ArtScapeLogo from './ArtScapeLogo'
import { Lobster } from 'next/font/google';
import CategoriesCard from './CategoriesCard';
import TopicDiv from './TopicDiv';

const lobster = Lobster({ subsets: ['latin'], weight: ['400'] });

export default function DemoheroCol() {
  return (
    <>
        <TopicDiv title="Categories" />
        <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center gap-2 pb-[40px]'>
                <ArtScapeLogo /> <span className={'text-xl ' + lobster.className }> Collections </span>
            </div>
            <div className='flex gap-6 w-full-auto '>
                <CategoriesCard title="Realism Art" link='/' imgSrc="/CategoriesArt/Realism.avif"/>
                <div className='grid grid-cols-2 grid-rows-2 gap-6 [&>div]:h-[100%] [&>div]:w-[400px]'>
                    <CategoriesCard title="Renaissance Art" link='/' imgSrc="/CategoriesArt/Renaissance.avif"/>
                    <CategoriesCard title="Impressionism" link='/' imgSrc="/CategoriesArt/Impressionism.avif"/>
                    <CategoriesCard title="Abstract Art" link='/' imgSrc="/CategoriesArt/Abstract.avif"/>
                    <CategoriesCard title="Pop Art" link='/' imgSrc="/CategoriesArt/Pop.avif"/>
                </div>
            </div>
        </div>
    </>
  )
}
