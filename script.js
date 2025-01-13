const Btn = document.getElementById("submitBtn");
const wttr = document.getElementById("desc");
const temp = document.getElementById("temp");
const sun = document.getElementById("sun");
const wind = document.getElementById("wind");
const cityDate = document.getElementById("cityDate");
const humidity = document.getElementById("humidity");
const pressure = document.getElementById("pressure");
console.log(wttr.textContent)
const apiKey = "f79536a5964bfd8f52914bbd049cfea1";
city=`chennai`;
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
async function checkWeather(city) {
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(weatherURL);
    var dataObject = await response.json();
    return dataObject;
}
Btn.addEventListener("click", event => {
    event.preventDefault();
    console.log(weatherURL);
    const city = document.getElementById("name").value;
    if (city) {
        const dataObject = checkWeather(city);
        const Update = async () => {
            const data = await dataObject;
            cityDate.textContent=`${data.name}, ${data.sys.country} | ${new Date().toDateString()}`;
            temp.textContent=`${Math.round(data.main.temp)}°C` ;
            wttr.textContent=`${data.weather[0].main}`;
            const sunrise = new Date(data.sys.sunrise*1000);
            const sunset = new Date(data.sys.sunset*1000);
            wind.textContent=`Wind Speed: ${data.wind.speed} m/s`;
            sun.textContent=`Sunrise: ${sunrise.getHours()}:${sunrise.getMinutes()} AM, Sunset: ${sunset.getHours()}:${sunset.getMinutes()} PM`;
            humidity.textContent=`Humidity: ${data.main.humidity}%`;
            pressure.textContent=`Pressure: ${data.main.pressure} hPa`;
            console.log(data);
          };
        Update()
        document.getElementById("weatherDetails").scrollIntoView({behavior: "smooth"});
        }
    else console.log("Empty field");
});
