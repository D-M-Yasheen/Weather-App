import React, { useContext, useEffect, useState } from 'react'
import { Spinner } from '../components/Spinner'
import { AppContext } from '../context/AppContext'
import { ShowWeather } from '../components/ShowWeather'
import { SearchInput } from '../components/SearchInput'


export const SearchPage = () => {
  const cityName = sessionStorage.getItem("search-city");
  const { fetchWeatherInfo, loader } = useContext(AppContext)


  useEffect(() => {
    console.log("city name : ", cityName)
    if (cityName !== "" && cityName !== null)
      fetchWeatherInfo(null, null, cityName)
  }, [location.pathname])

  return (
    <div className='w-[512px]'>

      {
        loader ?
          <Spinner /> :
          <div>
            <SearchInput/>
            {
              cityName !== "" && cityName !== null &&
              <ShowWeather />
            }
          </div>
      }
    </div>
  )
}
