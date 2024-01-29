import React from 'react'
import { toast } from 'react-hot-toast';
import { MdOutlinePlace } from "react-icons/md"
import { useNavigate } from 'react-router-dom'


export const HomePage = () => {
    const navigate = useNavigate();

    function showPosition(position) {
        const userCoord = {
            lat: position.coords.latitude,
            lon: position.coords.longitude
        }
        sessionStorage.setItem("user-coord", JSON.stringify(userCoord))
        navigate("/your-weather")
    }

    function grantAccessHandler() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        }
        else {
            toast.error("No Geolocation Support Available");
        }
    }

    return (
        <div>
            <div className='mt-16 flex flex-col
         items-center justify-center text-white'>

            <div className='w-20 h-20 flex
             bg-green-600 rounded-full
             justify-center items-center mb-8'>
                <MdOutlinePlace fontSize={50} />
            </div>

            <h1 className='text-3xl font-semibold'>
                Grant Location Access
            </h1>

            <p className='text-[13px] py-3 tracking-wider'>
                Allow Access to get weather information
            </p>

            <div className='py-3'>
                <button className='uppercase text-sm
                px-8 py-2 text-center bg-[#3F72AF]
                rounded-md hover:bg-blue-700'
                    onClick={() => grantAccessHandler()}>
                    Grant Access
                </button>
            </div>

        </div>
        </div>
        
    )
}
