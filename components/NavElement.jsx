import React from 'react'
import Link from 'next/link'

export default function NavElement(props) {
    const { title, link } = props;
  return (
    <button>
        <Link href={link}> {title} </Link> 
    </button>
  )
}
