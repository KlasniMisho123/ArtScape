import React, { useEffect, useState } from 'react'

export default function StatusMessage(props) {
    const [text, setText] = useState("")

    const { status } = props

    let fullText = ""

    function statusToText() {
        if(status === 0) {
            setText("")
        } else if(status === 200) {
            setText("Profile Updated Successfully")
        } else if(status >= 400){
            setText("Error Aquired")
        }
        fullText = {}
    }

    useEffect(()=>{
        statusToText()
    }, [status])

  return (
    <div>  {text} </div>
  )
}
