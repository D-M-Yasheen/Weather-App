import React, { useContext, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { AppContext } from '../context/AppContext'

export const SearchInput = () => {
    const [city, setCity] = useState("")
    const { fetchWeatherInfo } = useContext(AppContext)

    function cityHandler() {
        console.log("search coord : ",)
        if (city !== "") {
            sessionStorage.setItem("search-city", city);
            fetchWeatherInfo(null, null, city);
        }
    }

    return (
        <label className='my-6 w-full flex mx-auto justify-center items-center
        gap-2'>
            <input className='w-full h-10 placeholder:text-slate-100 
            bg-slate-400 focus-visible:text-slate-100 
            px-5 rounded-xl outline-slate-300'
                type='text'
                placeholder='Enter City'
                onChange={(event) => setCity(event.target.value)}
            />
            <div className='w-10 h-10 aspect-square flex justify-center 
            items-center rounded-full bg-[#3F72AF]'>
                <button onClick={() => cityHandler()}>
                    <AiOutlineSearch fontSize={24}/>
                </button>
            </div>
        </label>
    )
}
