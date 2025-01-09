import React from 'react'
import Link from 'next/link'

export default function NavElement(props) {
    const { title, link, icon, profileType } = props;

    // profileType
    function hashAsLink(link) {
      const hashingLink = ""
    }

  return (
    <button className={profileType?("management-nav-button p-1 "):("shadow-none hover:scale-110 " + (icon? "nav-div":""))}>
      <Link href={link} className='flex items-center justify-center gap-2 w-full'>
        <span className='text-[18px]'>{title}</span>
        {icon ? (
          <span className="text-red-600 text-[20px]">
            {icon}
          </span>
        ) : null}
      </Link>
    </button>
  )
}
