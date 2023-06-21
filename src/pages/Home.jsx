import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import LogoImg from "../assets/images/logo.svg";

function Home() {
  return (
    <div className='min-h-screen bg-purple-400 flex flex-col justify-center items-center'>
        <div className="flex justify-center items-center mb-4">
            <img src={LogoImg} className="h-14 w-14 text-center" />
        </div>
        <Link to={"/signin"} className='bg-blue-500 text-white px-8 font-bold py-2 rounded-md hover:bg-blue-600'>Sign In</Link>
    </div>
  )
}

export default Home