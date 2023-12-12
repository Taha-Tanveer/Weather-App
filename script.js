
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '703d046ccbmsh34241ec9cabcee5p1f2d96jsn5bad555c72ea',
//         'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//     }
// };
// async function checkWeather(city) {
    
//         // const city = "seattle";
//     const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         // console.log(result);
//         document.getElementById("cloud_pct").innerHTML = response.cloud_pct
//         document.getElementById("temp").innerHTML = response.temp
//         document.getElementById("feels_like").innerHTML = response.feels_like
//         document.getElementById("humidity").innerHTML = response.humidity
//         document.getElementById("min_temp").innerHTML = response.min_temp
//         document.getElementById("max_temp").innerHTML = response.max_temp
//         document.getElementById("wind_speed").innerHTML = response.wind_speed
//         document.getElementById("wind_degrees").innerHTML = response.wind_degrees
//         document.getElementById("sunrise").innerHTML = response.sunrise
//         document.getElementById("sunset").innerHTML = response.sunset
//     } catch (error) {
//         console.error(error);
//     }
// }
// submit.addEventListener("click",(e)=>{
//   checkWeather(city.value) } )
// checkWeather("seattle")

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '703d046ccbmsh34241ec9cabcee5p1f2d96jsn5bad555c72ea',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

async function checkWeather(city) {
    cityName.innerHTML=city
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    try {
        const response = await fetch(url, options);
        const result = await response.json();

        // Assuming the weather data is nested under the "result" key
        // document.getElementById("cloud_pct").innerHTML =result.cloud_pct;
        document.getElementById("temp").innerHTML =result.temp;
        document.getElementById("temp2").innerHTML =result.temp;
        document.getElementById("feels_like").innerHTML =result.feels_like;
        document.getElementById("humidity").innerHTML =result.humidity;
        document.getElementById("humidity2").innerHTML =result.humidity;
        document.getElementById("min_temp").innerHTML =result.min_temp;
        document.getElementById("max_temp").innerHTML =result.max_temp;
        document.getElementById("wind_speed").innerHTML =result.wind_speed;
        document.getElementById("wind_speed2").innerHTML =result.wind_speed;
        document.getElementById("wind_degrees").innerHTML =result.wind_degrees;
        document.getElementById("sunrise").innerHTML =result.sunrise;
        document.getElementById("sunset").innerHTML =result.sunset;
    } catch (error) {
        console.error(error);
    }
}

const submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
    e.preventDefault();
    const cityInput = document.getElementById("city");
    checkWeather(cityInput.value);
});

// Call checkWeather with a default city (e.g., Seattle) on page load
checkWeather("Hyderabad");
