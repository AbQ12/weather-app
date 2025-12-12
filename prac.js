document.addEventListener('DOMContentLoaded',() => {

const cityInput = document.getElementById('city-input');
const getInputbtn = document.getElementById('get-weather-btn');
const weatherInfo = document.getElementById('weather-info');
const cityNameDisp = document.getElementById('city-name');
const temperatureDisp = document.getElementById('temperature');
const descriptionDisp = document.getElementById('description');
const errorMessageDisp = document.getElementById('error-message');

const API_key = '9f8998c1883b23c9bbb13b68c699c8ad';//env variable

// 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric'
getInputbtn.addEventListener('click',async () => {
    const city = cityInput.value.trim();
    if(!city){return alert("the string is empty!!")}
    try{
     await fetchWeatherData(city)
    }catch{
        shoeError()
    }


})

function fetchWeatherData(city){
    //fetches the weather data
    
}
function displayWeatherData(){
    //displays the weather data
}

function displayError(){
    //displays the error
    weatherInfo.classList.add('hidden');
    errorMessageDisp.classList.remove('hidden');


}


























})