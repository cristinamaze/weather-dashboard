$(document).ready(function() {

    console.log("hello")
    var history=JSON.parse(localStorage.getItem("history"))||[] 
    var searchButton = $("#search-button")
    searchButton.click(searchFunction)

    function searchFunction(event) {
        event.preventDefault()
        var searchCity = $("#search-city").val()
        console.log(searchCity)
        history.push(searchCity)
        localStorage.setItem("history", JSON.stringify(history))

        $.ajax({
            type: "GET",
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=26bbe025e9f5a2567433d6f2ec405c5e&units=imperial",
            dataType: "json",
            success: function(data) {
                console.log(data)
                searchUV(data.coord.lon, data.coord.lat)
                displayWeather(data)
            }

        })
    }

    function displayWeather(data) {
        $("#cityName").text(data.name)
        $("#temp").text(data.main.temp + " degrees")
        $("#humidity").text("humidity: " + data.main.humidity + "%")
        $("#wind-speed").text("wind speed: " + data.wind.speed + "mph")
    }

    function searchUV(lat, lon) {
        $.ajax({
            type: "GET",
            url: "https://api.openweathermap.org/data/2.5/uvi?appid=26bbe025e9f5a2567433d6f2ec405c5e&lat=" + lat + "&lon=" + lon,
            dataType: "json",
            success: function(data) {
                console.log(data)
            }

        })
    }
    // searchFunction()
})
//var city = "#city-search";
// $("searchbar")

// fetch("https://api.openweathermap.org/data/2.5/forecast/hourly?q=" + city + "&APPID=e025e9f5a2567433d6f2ec405c5e", {

 // parseInit  // cache: "reload"
