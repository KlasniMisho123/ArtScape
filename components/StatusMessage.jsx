import React, { useEffect, useState } from 'react'

export default function StatusMessage(props) {
    const [text, setText] = useState("")
    const [icon, setIcon] = useState("")

    const { status } = props

    function statusToText() {
        if(status === 0) {
            setText("")
            setIcon("")
        } else if(status === 200) {
            setText("Profile Updated Successfully")
            setIcon(<i className="fa-solid fa-circle-check"></i>)
        } else if(status >= 400){
            setText("Error Aquired")
            setIcon(<i className="fa-solid fa-xmark"></i>)
        }
    }

    useEffect(()=>{
        statusToText()
    }, [status])

  return (
    <div className={' ' + (status === 200? "text-green-400" : "text-red-400" )}> {icon} {text} </div>
  )
}
