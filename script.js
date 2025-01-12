const apiKey = 'c50b3da9e7b47a539083a5f6aaea7bdb';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`;

const searchBox = document.querySelector(".inputBox>input");
const searchBtn = document.querySelector(".inputBox>button");
const weatherIcon = document.querySelector(".temp>img");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector('.error').style.display = "block"
        document.querySelector('.hide').style.display = "none"
    }
    else{

    

    var data = await response.json();
    

    document.querySelector(".showCity").innerHTML = data.name;
    document.querySelector(".showTemp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity-text>h3").innerHTML = data.main.humidity + "%";
    document.querySelector(".windSpeed-text>h3").innerHTML = data.wind.speed + "km/h";
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "cloud.png"
    }
    if(data.weather[0].main == "Clear"){
        weatherIcon.src = "clearsky.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rainy-weather.png"
    }
    else if(data.weather[0].main == "Drizzel"){
        weatherIcon.src = "sky.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png"
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "snow.png"
    }
    else if(data.weather[0].main == "Thunderstorm"){
        weatherIcon.src = "thunderstorm.png"
    } 
    else{
        weatherIcon.src = "thunderstorm.png"
    }
    console.log(data);
}
}
function display() {
    checkWeather(searchBox.value);
    document.querySelector('.hide').style = "display:block"
    document.querySelector('.error').style.display = "none"
}
searchBtn.addEventListener('click', display);

searchBox.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); 
      display();
    }
  })
