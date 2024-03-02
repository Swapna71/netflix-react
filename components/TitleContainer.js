import React from 'react'

const TitleContainer = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video  pt-[20%] md:px-24 px-10 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='md:text-6xl text-lg font-bold'>{title}</h1>
      <p className='md:block hidden py-6 text-lg w-1/4'>{overview}</p>
      <div>
        <button className='bg-white text-black font-bold px-2 md:px-16 md:text-2xl text-sm md:py-4  rounded hover:bg-opacity-70'>▶️Play</button>
        <button className='bg-gray-500 font-bold px-2 md:px-16 md:text-2xl text-sm md:py-4 bg-opacity-30 rounded hover:bg-opacity-80'>ℹ️More Info</button>
      </div>
    </div>
  )
}

export default TitleContainer
