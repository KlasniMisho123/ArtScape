import React, { Children } from 'react'

export default function props() {
    const { children } = props
  return (
    <main> 
        {children}
    </main>
  )
}
