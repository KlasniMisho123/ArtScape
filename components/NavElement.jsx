import React from 'react'
import Link from 'next/link'

export default function NavElement(props) {
    const { title, link, icon } = props;
  return (
    <button>
        <Link href={link} className='flex item-center gap-2 '> <span> {title} </span>  {icon? (<span style={{fontSize:"20px"}}> {icon} </span>) : null} </Link> 
    </button>
  )
}
