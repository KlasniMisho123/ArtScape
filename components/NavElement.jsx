import React from 'react'
import Link from 'next/link'

export default function NavElement(props) {
    const { title, link, icon } = props;
  return (
    <button className='shadow-none hover:shadow-lg transition-shadow ' >
        <Link href={link} className='flex items-center gap-2'>
    <span>{title}</span>
    {icon ? (
      <span className="text-red-600 text-[20px]">
        {icon}
      </span>
    ) : null}
  </Link>
    </button>
  )
}
