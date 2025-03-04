import React from 'react'

export default function EmailEdit(props) {
    const { isChangeingDigInfo, setIsChangeingDigInfo} = props
  return (
    <div className={'absolute z-50 w-[100%] h-full opacity-75 left-0 top-0 ' + (isChangeingDigInfo ? " overflow-y-hidden" : "")}>
        <button className='w-full h-full bg-gray-900 bg-opacity-60 flex justify-center absolute z-5 flex justify-center'
        onClick={() => {setIsChangeingDigInfo(false)}} />

    </div>
  )
}
