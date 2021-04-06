const apikey = "99f9d1e992ebf7091f2f24e748535ae1";
const cityInput = document.getElementById("city-input");
const form = document.getElementById("city-form");
const temperatureText = document.getElementById("temperature-text");
const cityText = document.getElementById("city-text");
const maxTemperatureText = document.getElementById("max-temperature-text");
const minTemperatureText = document.getElementById("min-temperature-text");
const cloudQuantity = document.getElementById("cloud-quantity-text");
const results = document.getElementById("results");
const button = document.getElementById("consult-button")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    city = cityInput.value;
    getData(city);
})

button.addEventListener("submit", (e) => {
    e.preventDefault();
    city = cityInput.value;
    getData(city);
})

const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getData(city){
    const resp = await fetch(url(city), { origin: "cors" });
    const respData = await resp.json();

    showWeather(respData);
}

function showWeather(data){
    results.style.opacity = "1";
    results.style.pointerEvents = "auto";
    cityText.innerHTML = data.name;
    maxTemperatureText.innerHTML = `Temperatura máxima: ${kelvinToCelsius(data.main.temp_max).toFixed(2)} ºC`;
    temperatureText.innerHTML = `Temperatura atual: ${kelvinToCelsius(data.main.temp).toFixed(2)} ºC`;
    minTemperatureText.innerHTML = `Temperatura mínima: ${kelvinToCelsius(data.main.temp_min).toFixed(2)} ºC`;
    cloudQuantity.innerHTML = `Quantidade de nuvens: ${data.clouds.all}`;
}

function kelvinToCelsius(temperature){
    const convertedTemp = temperature - 273.15;
    return convertedTemp;
}