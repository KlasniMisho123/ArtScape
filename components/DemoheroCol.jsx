import React from 'react'
import ArtScapeLogo from './ArtScapeLogo'
import { Lobster, Open_Sans } from 'next/font/google';
import CategoriesCard from './CategoriesCard';
import TopicDiv from './TopicDiv';

const lobster = Lobster({ subsets: ['latin'], weight: ['400'] });
const openSans = Open_Sans({ subsets: ['latin']})

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
        <TopicDiv title="Top Artists" />
        <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center gap-2 pb-[40px]'>
                <h4 className={'text-[32px]  ' + openSans.className } > Most Upvoted Artists <i className="fa-solid fa-star text-yellow-300 "></i> </h4>
            </div>
            <div  className='w-full bg-gray-300 flex justify-center pb-[100px] '>
                <div className='flex gap-4 w-full-auto w-[75%] min-w-[600px] overflow-x-scroll '>
                    <div className='w-[30%] flex-shrink-0 p-4 bg-green-200 flex flex-row-reverse justify-evenly '>
                        <div className='border-2 border-black rounded-[100%] bg-gray-100 gap-4 '>
                            <img src={"artScapeLogo.png"} className='w-[100px] h-[100px] fit-cover '/>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h2 className={'text-2xl mx-auto ' + lobster.className} >Jey Dots</h2>
                            <h3>8090 Upvotes </h3>
                        </div>
                    </div>

                    <div className='w-[25%] flex-shrink-0'>CARD2</div>
                    <div className='w-[25%] flex-shrink-0'>CARD3</div>
                    <div className='w-[25%] flex-shrink-0'>CARD4</div>
                    <div className='w-[25%] flex-shrink-0'>CARD5</div>
                </div>
            </div>
        </div>
    </>
  )
}
