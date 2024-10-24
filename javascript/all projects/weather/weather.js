const apikey ="1af33a98934192fc1d0dc30f45718c87";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchInp =  document.querySelector(".search input");
const searchBtn = document.querySelector(".btn")
const weathericon = document.querySelector(".clouds-image")

async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`); 
    let data = await response.json();
    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".tamp").innerText =Math.round(data.main.temp) +" °C";
    document.querySelector(".persent").innerText = data.main.humidity +"%";
    document.querySelector(".wind-unit").innerText = data.wind.speed + " km/h"
    
    if(data.weather[0].main == "Clouds" ){
        weathericon.src = "clouds.png"
    }else if (data.weather[0].main == "Clear" ){
        weathericon.src = "clear.png"
    }else if (data.weather[0].main == "Drizzle" ){
        weathericon.src = "drizzle.png"
    }else if (data.weather[0].main == "Rain" ){
        weathericon.src = "rain.png"
    }else if (data.weather[0].main == "Snow" ){
        weathericon.src = "snow.png"
    }else if (data.weather[0].main == "Mist" ){
        weathericon.src = "mist.png"
    }
    
   
    
    
}
searchBtn.addEventListener("click", () =>{
    checkweather(searchInp.value)
   }) 

