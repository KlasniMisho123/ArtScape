import React from 'react'
import ArtScapeLogo from './ArtScapeLogo'
import { Lobster, Open_Sans } from 'next/font/google';
import CategoriesCard from './CategoriesCard';
import TopicDiv from './TopicDiv';
import UpVotedArtistCard from './UpVotedArtistCard';

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
                <h4 className={'text-[32px] bg-gray-100 ' + openSans.className } > Most Upvoted Artists <i className="fa-solid fa-star text-yellow-300 "></i> </h4>
            </div>
            <div className='w-full  flex justify-center py-[50px]  '>
                <div className='flex gap-[5%] bg-gray-200 w-full-auto w-[75%] min-w-[600px] overflow-x-scroll p-2 '>
                    <UpVotedArtistCard
                        fullname="Joe Dots"
                        imgSrc={"artScapeLogo.png"}
                        Upvotes={"8.1K"}
                        artWorks={75}
                        FavCategories={"Abstract & Realism"}
                    />
                    <UpVotedArtistCard
                        fullname="Joe Dots"
                        imgSrc={"artScapeLogo.png"}
                        Upvotes={"8.1K"}
                        artWorks={75}
                        FavCategories={"Abstract & Realism"}
                    />
                    <UpVotedArtistCard
                        fullname="Joe Dots"
                        imgSrc={"artScapeLogo.png"}
                        Upvotes={"8.1K"}
                        artWorks={75}
                        FavCategories={"Abstract & Realism"}
                    />
                    <UpVotedArtistCard
                        fullname="Joe Dots"
                        imgSrc={"artScapeLogo.png"}
                        Upvotes={"8.1K"}
                        artWorks={75}
                        FavCategories={"Abstract & Realism"}
                    />
                    <UpVotedArtistCard
                        fullname="Joe Dots"
                        imgSrc={"artScapeLogo.png"}
                        Upvotes={"8.1K"}
                        artWorks={75}
                        FavCategories={"Abstract & Realism"}
                    />
                </div>
            </div>
        </div>
    </>
  )
}
