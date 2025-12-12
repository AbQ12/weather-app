 
 document.addEventListener('DOMContentLoaded',() =>{
  
  const  cityInput = document.getElementById('city-input');
  const getWEatherBtn = document.getElementById('get-weather-btn');
  const weatherInfo = document.getElementById('weather-info');
  const cityNameDisp = document.getElementById('city-name');
  const tempDisp = document.getElementById('temperature');
  const descriptionDisp = document.getElementById('description');
  const errorMessage = document.getElementById('error-message');
  const API_key  = "9f8998c1883b23c9bbb13b68c699c8ad";//env variables 

  getWEatherBtn.addEventListener('click', async () => {
    const city = cityInput.value.trim()

    if(!city) {return;}
    try{
        const weatherData = await fetchWeatherData(city)
        displayWeatherData(weatherData);
    }catch(error){
        showError();
    }
  })

   async function fetchWeatherData(city){
    //gets the data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
    const response =await fetch(url);
    console.log(typeof response);
    console.log('response',response);
    if(!response.ok){
        throw new Error("city not dound");
    }
    const data = await response.json();
    return data;

   }
   function displayWeatherData(data){
    //display data
    console.log(data);
    const {name,main,weather} = data;
    cityNameDisp.textContent = name;
    tempDisp.textContent = `temperature is ${main.temp}`
    descriptionDisp.textContent = `weather is ${weather[0].description}`;

    //unlcok the disp
    weatherInfo.classList.remove('hidden');
    errorMessage.classList.add('hidden');


    
   }
   function displayError(){
    //display error
    weatherInfo.classList.remove('hidden');
    errorMessage.classList.remove('hidden');
   }




 })