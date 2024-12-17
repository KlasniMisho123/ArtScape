import Link from 'next/link'
import React from 'react'

export default function CategoriesCard(props) {
    const { imgSrc, link, title} = props
  return (
    <div className='bg-gray-100 h-[500px] w-[300px] rounded-[30px] overflow-hidden relative '>
        <img src={imgSrc} className='absolute insert-0 h-full w-full object-cover '/>
        <div className="relative z-10 text-white mx-6 pt-6 w-full ">
            <h4 className='text-2xl font-bold '> {title} </h4> 
        </div>
        <div className="relative z-10 text-white p-6 flex"> 
            <Link href={link}>
                <button className='flex bg-transparent text-white flex gap-2 pr-4 py-1 items-center border-white border rounded-[32px] p-1 w-full-auto hover:bg-white collection-btn '> 
                    <div className='px-[8px] py-[2px] rounded-[32px] border-white border text-sm'> 
                    <i className="fa-solid fa-caret-up rotate-[90deg]"> </i>
                    </div>
                    <p className='whitespace-nowrap'>View Collection</p>  
                </button>
            </Link>
        </div>
    </div>
  )
}
