import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import { BG_URL } from '../utils/constant'


const GPTSearch = () => {
  return (
    <div className=' -mt-28 md:-mt-24 '>
        <img
        className='fixed h-screen w-screen object-cover -z-50 '
          src={BG_URL}
          alt="img"
        /> 
         
       <div className="z-50 ">
       <GPTSearchBar />
    
       <GPTMovieSuggestion />
      </div>
    

    </div>
  )
}

export default GPTSearch
