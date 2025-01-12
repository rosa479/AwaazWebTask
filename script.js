const Btn = document.getElementById("submitBtn");
const wttr = document.getElementById("desc");
const temp = document.getElementById("temp");
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
            temp.textContent=`${Math.round(data.main.temp)}°C` ;
            wttr.textContent=`${data.weather[0].main}`;
            console.log(data);
          };
        Update()
        document.getElementById("weatherDetails").scrollIntoView({behavior: "smooth"});
        }
    else console.log("Empty field");
});
