import React from 'react'
import { MdCloud, MdWindPower } from 'react-icons/md';
import {WiStrongWind, WiHumidity} from 'react-icons/wi'

export const ExtraDetails = (props) => {
  let type = props.type;
  let data = props.data;

  return (
    <div className='flex flex-col 
    items-center box-bg py-4 px-2 rounded-md'>
      <div>
        {
          type === "WINDSPEED" && <WiStrongWind fontSize={50} color='#47B5FF' /> ||
          type === "HUMIDITY" && <WiHumidity fontSize={50} color='#7DCE13' /> ||
          type === "CLOUDS" && <MdCloud fontSize={50} color='#0779E4' />
        }

      </div>

      <h1 className='text-xl font-semibold'>
        {type}
      </h1>

      <p className="text-lg">
        {data}
        {type === "WINDSPEED" ? "m/s" : "%"}
      </p>
    </div>
  )
}
