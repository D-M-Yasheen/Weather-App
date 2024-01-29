import React, { useContext, useEffect } from 'react'
import { ShowWeather } from '../components/ShowWeather'
import { Spinner } from '../components/Spinner'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'


export const YourWeatherPage = () => {
    const {loader ,fetchWeatherInfo} = useContext(AppContext);
    const navigate = useNavigate();

    useEffect( () => {
        const coord = sessionStorage.getItem("user-coord");
        try{
            const {lat, lon} = JSON.parse(coord);
            fetchWeatherInfo(lat, lon);
        }
        catch(error) {
            sessionStorage.removeItem("user-coord");
            toast.error("Data Not Found");
            navigate("/")
        }
        
    },[location.pathname])

    return (
        <div className='w-[512px]'>
            {
                loader ?
                    <Spinner /> :
                    <ShowWeather />
            }
        </div>
    )
}
