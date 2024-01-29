import React, { useContext } from 'react'
import { ExtraDetails } from './ExtraDetails'
import { AppContext } from '../context/AppContext'

export const ShowWeather = () => {
    const { weatherInfo } = useContext(AppContext)

    return (
        <div className='flex flex-col items-center
        pt-4'>
            {
                weatherInfo !== null &&
                <div className='flex flex-col items-center
                space-y-4'>

                    <div className='flex gap-2
                    items-baseline'>

                        <h1 className='text-3xl'>
                            {weatherInfo?.name}
                        </h1>

                        <div className='w-8 flex flex-col justify-center aspect-square'>
                            <img src={`https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`} />
                        </div>

                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-2xl'>
                            {weatherInfo?.weather[0]?.main}
                        </h1>

                        <div className='h-[80px]'>
                            <img className='w-[100px]'
                             src={`http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`} />
                        </div>
                    </div>

                    <h1 className='text-5xl font-bold'>
                        {weatherInfo?.main?.temp}°C
                    </h1>

                    <div className='grid grid-cols-3 gap-5 pt-6'>
                        <ExtraDetails type="WINDSPEED" data={weatherInfo?.wind?.speed} />
                        <ExtraDetails type="HUMIDITY" data={weatherInfo?.main?.humidity} />
                        <ExtraDetails type="CLOUDS" data={weatherInfo?.clouds?.all} />
                    </div>
                </div>
            }
        </div>
    )
}
