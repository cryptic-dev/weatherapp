
const form = document.getElementById("form");
const main = document.getElementById("main");
const search = document.getElementById("search");



const apiKey = "8ae8b005d87a451c517c7f6e5ed388f1";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

async function getWeather(){
    const resp = await fetch(url);
    const temp = await resp.json();
    console.log(temp.main.temp)
}


function addelement() {
    const temperature = document.createElement("div");
    temperature.classList.add("temperature");

    temperature.innerHTML = 
    `
    <p> the temp is ${temp.main.temp} for now    `;
    main.appendChild(temperature);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = search.value;
    if (city) {
        getWeather(city)
    }

})
