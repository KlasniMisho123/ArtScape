import { Lobster } from 'next/font/google';
import React from 'react'

const lobster = Lobster({ subsets: ['latin'], weight: ['400'] });

export default function UpVotedArtistCard(props) {
    const { fullname, imgSrc, Upvotes, artWorks, FavCategories} = props
  return (
    <div className='w-[30%] flex-shrink-0 bg-white flex flex-col rounded rounded-t-xl overflow-hidden mb-4'>
        <div className='bg-gray-100 gap-4 h-[200px] p-4 pb-0'>
            <img src={imgSrc} className='h-full w-full object-cover border-b-black border-b hover:border-x '/>
        </div>
        <div className='flex flex-col gap-4 p-4 '>
            <h2 className={'text-2xl mx-auto ' + lobster.className}>{fullname}</h2>
            <div>
                <h3 className="text-lg font-semibold">Upvotes:</h3>
                <p>{Upvotes} Upvotes</p>
            </div>
            <div>
                <h3 className="text-lg font-semibold">Artworks:</h3>
                <p>{artWorks} Paintings</p>
            </div>
            <div>
                <h3 className="text-lg font-semibold">Favorite Categories:</h3>
                <p>{FavCategories}</p>
            </div>
        </div>
    </div>
  )
}
