document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById("city-input")
    const getWeatherButton = document.getElementById("get-weather-btn")
    const weatherInfo = document.getElementById("weather-info")
    const cityName = document.getElementById("city-name")
    const temperature = document.getElementById("temperature")
    const description = document.getElementById("description")
    const errorMsg = document.getElementById("error-message")


    const API_KEY = "2a659575f5a2dfa8b32ed12ddc43e331"


    getWeatherButton.addEventListener('click', async () => {
        const city = cityInput.value.trim()
        if (city==="") return
        try{
            const geoResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appId=${API_KEY}`)
            const geoData = await geoResponse.json()

            if(!geoData || geoData.length ===0) {
                throw new Error("City not found")
            }
            const lat = geoData[0].lat
            const lon = geoData[0].lon
            


            const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appId=${API_KEY}`)
            const weatherData = await weatherResponse.json()

            cityName.textContent = city
            temperature.textContent = `${((weatherData.main.temp)-(273.15)).toFixed(1)}°C`
            description.textContent = weatherData.weather[0]?.description

            weatherInfo.classList.remove('hidden')
            errorMsg.classList.add('hidden')

        }
        catch(error){
            console.log(error)
            weatherInfo.classList.add('hidden')
            errorMsg.classList.remove('hidden')
        }
    })
})

