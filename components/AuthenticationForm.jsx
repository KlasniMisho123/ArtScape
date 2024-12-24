import { Poppins } from 'next/font/google';
import React, { useState } from 'react'

const poppins = Poppins({ subsets: ['latin'], weight: ['600'] });


export default function AuthenticationForm(props) {
  const  { setAuthenticatingActive } = props

  const [isRegistered, setIsRegistered ] = useState(true)
  const [username, setUsername ] = useState("")
  const [email, setEmail ] = useState("")
  const [password, setPassword] = useState("")

  function handleAuthType() {
    console.log("isRegistered: ", isRegistered)
    setIsRegistered(!isRegistered)
  }

  async function handleSubmit() {
    try {
      
      setUsername("")
      setEmail("")
      setPassword("")
    } catch(err) {
      console.log(err.message)
    } finally {
      
    }
  }

  return (
    <div className='absolute z-50 w-[100%] h-full'>
        <button className='w-full h-[150%] bg-gray-900 bg-opacity-60 flex justify-center absolute z-5 flex justify-center'
        onClick={() => {setAuthenticatingActive(false)}} />

        <div className='bg-white p-[60px] px-[80px] min-w-[450px] mt-[5%] w-fit mx-auto relative z-5 flex flex-col gap-[40px] rounded-[25px]'>
            <h2 className={'text-[32px] weight-bolder ' + poppins.className}>{isRegistered ? "Login to website" : "Registration from"}</h2>
            <div className='flex flex-col gap-4 '>
              <input
                placeholder='Username'
                className='p-2 border rounded-xl outline-none' 
                value={username}
                onChange={(e)=>{
                  setUsername(e.target.value)
                }}
                />
              <input
                placeholder='Email'
                className='p-2 border rounded-xl outline-none' 
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
                />
              <input
                placeholder='Password'
                className='p-2 border rounded-xl outline-none'
                type='password'
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                 />
              <button className='bg-blue-400 text-white py-2 px-4 rounded-lg hover:opacity-90'
               onClick={handleSubmit} >
                {isRegistered ?  "Log In": "Sign up" }
              </button>
              <p> {isRegistered ? "Don’t have an account?" : "Already have an account?"}  <button onClick={handleAuthType} className="text-blue-500" >{isRegistered ? "Sign up" : "Log In"}</button></p>
            </div>
        </div>
    </div>
  )
}

