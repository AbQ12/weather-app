document.addEventListener('DOMContentLoaded',() => {

const cityInput = document.getElementById('city-input');
const getInputbtn = document.getElementById('get-weather-btn');
const weatherInfo = document.getElementById('weather-info');
const cityNameDisp = document.getElementById('city-name');
const temperatureDisp = document.getElementById('temperature');
const descriptionDisp = document.getElementById('description');
const errorMessageDisp = document.getElementById('error-message');

const API_key = '9f8998c1883b23c9bbb13b68c699c8ad';//env variable


getInputbtn.addEventListener('click',async () => {
    const city = cityInput.value.trim();
    if(!city){return alert("the string is empty!!")}
    try{
     const weatherData = await fetchWeatherData(city);
     displayWeatherData(weatherData);
    }catch{
        shoeError()
    }


})

async function fetchWeatherData(city){
    //fetches the weather data
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric';
    const response = fetch(url);
    if(!response.ok){
        throw new Error('city not found');
    }
    const data = (await response).json()
    return data;
    
    
}
function displayWeatherData(weatherData){
    //displays the weather data
    console.log(weatherData);
    const {name,main,weather} = weatherData;
    cityNameDisp.textContent = name;
    temperatureDisp.textContent = `temperature : ${main.temperature}`;
    descriptionDisp.textContent = `weather: ${weather[0].description}`;
    //unlock disp
    weatherInfo.classList.remove('hidden');
    errorMessageDisp.classList.add('hidden');

}
function displayError(){
    //displays the error
    weatherInfo.classList.remove('hidden');
    errorMessageDisp.classList.remove('hidden');
}
})