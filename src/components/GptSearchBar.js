import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langKey = useSelector(store=>store.config.lang)
  return (
    <div className='pt-[10%] flex justify-center'>
        <form action="" type="text" className='w-1/2 bg-black grid grid-cols-12'>
            <input className='p-4 m-4 col-span-8' type="text" name="" id="" placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className='py-2 px-6 m-2 bg-[#e50914] text-white rounded-md col-span-4'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar