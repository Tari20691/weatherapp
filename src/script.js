function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city");
  console.log(searchInput.value);

  let h3 = document.querySelector("h3");
  if (searchInput.value) {
    h3.innerHTML = `${searchInput.value}`;

    // Call the API with the user-provided city
    let city = searchInput.value;
    let apiKey = "o1b51294bd100044e1tab17f08833d34";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(displayTemperature);
  } else {
    h3.innerHTML = null;
    alert("Please name a city");
  }
}

let form = document.querySelector("#city-search");
form.addEventListener("submit", search);

setInterval(function () {
  let currentDate = new Date();
  formDate(currentDate);
}, 1000);

function formDate(date) {
  let h4 = document.querySelector("h4"); //we want to change the H3 of the page
  let day = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]; //weil sonst bei day nur zahlen stehen würde und dann ab 0 beginnend
  let formattedDay = days[day];
  h4.innerHTML = `, ${formattedDay} ${hours}:${minutes};`;
}
function displayTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let city2 = response.data.city;
  let temperatureElement = document.querySelector("#temperatureNow");
  temperatureElement.innerHTML = `${temperature}°C`;
}
let city2 = "Berlin";
let apiKey = "o1b51294bd100044e1tab17f08833d34";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city2}&key=${apiKey}`;
axios.get(apiUrl).then(displayTemperature);
