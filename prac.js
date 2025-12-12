document.addEventListener('DOMContentLoaded',() => {

const cityInput = document.getElementById('city-input');
const getInputbtn = document.getElementById('get-weather-btn');
const weatherInfo = document.getElementById('weather-info');
const cityNameDisp = document.getElementById('city-name');
const temperatureDisp = document.getElementById('temperature');
const descriptionDisp = document.getElementById('description');
const errorMessageDisp = document.getElementById('error-message');

getInputbtn.addEventListener('click',() => {
    const city = cityInput.value.trim();
    if(!city){return;}

})

function fetchWeatherData(){
    //fetches the weather data
}

function displayError(){
    //displays the error

}


























})