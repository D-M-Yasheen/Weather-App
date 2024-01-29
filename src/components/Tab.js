import React from 'react'
import { NavLink } from 'react-router-dom'

export const Tab = () => {
    return (
        <div className='w-[512px]'>
            <div className='w-full text-white flex 
        justify-between mt-4 mx-auto '>
                <NavLink to="/your-weather">
                    <div className='curser-pointer text-sm 
            font-bold tracking-widest
            px-[8px] py-[5px]'>
                        Your Weather
                    </div>
                </NavLink>
                <NavLink to="/search-weather">
                    <div className='curser-pointer text-sm 
            font-bold tracking-widest
            px-[8px] py-[5px]'>
                        Search Weather
                    </div>
                </NavLink>
            </div>
        </div>
    )
}
