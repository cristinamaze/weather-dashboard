var fetchButton = document.getElementById("fetch-button");
var city = "text"

fetch("https://pro.openweathermap.org/data/2.5/forecast/hourly?q=" + city + "&appid=26bbe025e9f5a2567433d6f2ec405c5e", {
    cache: "reload",
})
  .then(function (response) {
      return response.json();
  })
  .then(function (data) {
      console.log(data);
  });