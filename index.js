const form = document.getElementById("form");
const main = document.getElementById("main");
const search = document.getElementById("search");

const apiKey = "8ae8b005d87a451c517c7f6e5ed388f1";

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const resp = await fetch(url);
  const data = await resp.json();

  updateTemp(data);
}

function updateTemp(data) {
  const temperature = document.getElementById("temp");
  const icon = document.getElementById("icon");

  if (data.main) {
    //update text
    temperature.innerHTML = `<p> 
        Temp in <span style="color:green">
        ${data.name},
        ${data.sys.country}
        </span> is <span style="color:green">
        ${Math.round(data.main.temp, 10)}°</span>.`;

    //update icon
    icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  } else {
    temperature.innerHTML = `<p style="color:red;">${data.message}</p>`;

    icon.src =
      "https://cdn.iconscout.com/icon/premium/png-256-thumb/error-2547221-2136999.png";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = search.value;

  if (city) {
    getWeather(city);
  }
});
