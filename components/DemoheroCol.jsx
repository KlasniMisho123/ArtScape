import React from 'react'
import ArtScapeLogo from './ArtScapeLogo'
import { Lobster, Open_Sans } from 'next/font/google';
import CategoriesCard from './CategoriesCard';
import TopicDiv from './TopicDiv';
import UpVotedArtistCard from './UpVotedArtistCard';

const lobster = Lobster({ subsets: ['latin'], weight: ['400'] });
const openSans = Open_Sans({ subsets: ['latin']})

export default function DemoheroCol() {

    const artists = [
        {
          fullname: "Lila Monte",
          imgSrc: "https://plus.unsplash.com/premium_photo-1674814950019-b29545fea7a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXJ0aXN0fGVufDB8fDB8fHww",
          Upvotes: "12.3K",
          artWorks: 94,
          FavCategories: "Impressionism & Modern",
        },
        {
          fullname: "Felix Hart",
          imgSrc: "https://plus.unsplash.com/premium_photo-1702598322608-b0f720050288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFydGlzdHxlbnwwfHwwfHx8MA%3D%3D",
          Upvotes: "8.5K",
          artWorks: 76,
          FavCategories: "Pop Art & Abstract",
        },
        {
          fullname: "Nora Vale",
          imgSrc: "https://plus.unsplash.com/premium_photo-1675425206468-dc196f6decdc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          Upvotes: "10.2K",
          artWorks: 88,
          FavCategories: "Realism & Abstract",
        },
        {
          fullname: "Theo Sparks",
          imgSrc: "https://media.istockphoto.com/id/1321486723/photo/japanese-man-spending-weekend-morning-painting-in-his-bedroom-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=JXw7o4Od_P7DTOUu3Q2ndsyyzjopOjRQl3kqm1Y2TbU=",
          Upvotes: "9.9K",
          artWorks: 71,
          FavCategories: "Cubism & Surrealism",
        },
        {
          fullname: "Aria Bell",
          imgSrc: "https://media.istockphoto.com/id/2157657577/photo/female-artist-standing-in-front-of-a-big-blank-canvas.webp?a=1&b=1&s=612x612&w=0&k=20&c=YPMLphw7fKUMIQ2nLxOkMycykEO5QTy2OCBz1ID4TTA=",
          Upvotes: "11.6K",
          artWorks: 82,
          FavCategories: "Baroque & Realism",
        },
      ];

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
                {artists.map((artist, index) => (
                    <UpVotedArtistCard
                    key={index}
                    fullname={artist.fullname}
                    imgSrc={artist.imgSrc}
                    Upvotes={artist.Upvotes}
                    artWorks={artist.artWorks}
                    FavCategories={artist.FavCategories}
                    />
                ))}
                </div>
            </div>
        </div>
    </>
  )
}
