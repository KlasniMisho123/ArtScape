import React from 'react'

export default function ThemeModeButton(props) {
  const { isLightMode, setIsLightMode } = props

  function handleThmeChange() {
    console.log("isLightMode: ", isLightMode)
    setIsLightMode(!isLightMode)
  }
  
  return (
    <button onClick={handleThmeChange}>
      <div>ThemeModeButton</div>
    </button>
  )
}
