import { createContext, useState } from "react";
import { toast } from "react-hot-toast";

export const AppContext = createContext();

const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

export default function AppContextProvider({ children }) {
    const [loader, setLoader] = useState(false);
    const [weatherInfo, setWeatherInfo] = useState(null)

    async function fetchWeatherInfo(lat, lon, city) {
        console.log("city ", city)
        console.log("lat ", lat)
        console.log("lon ", lon)

        setLoader(true);
        const input = city !== undefined ? `q=${city}` : `lat=${lat}&lon=${lon}`;
        const url = `https://api.openweathermap.org/data/2.5/weather?${input}&appid=${API_KEY}&units=metric`

        try {
            const response = await fetch(url);
            const output = await response.json();
            console.log("output is : ", output.cod)
            if (output.cod != 404) {
                setWeatherInfo(output)
            }
            else {
                throw new Error("404")
            }
        } catch (err) {
            sessionStorage.removeItem("search-city")
            toast.error("Data Not Found");
        }
        setLoader(false);
    }

    const value = {
        loader, setLoader, weatherInfo, setWeatherInfo, fetchWeatherInfo
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}