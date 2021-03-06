$(document).ready(function() {

    console.log("hello")

    var searchButton = $("#search-button")
    searchButton.click(searchFunction)

    function searchFunction(event) {
        event.preventDefault()
        var searchCity = "miami"
        console.log(searchCity)

        $.ajax({
            type: "GET",
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=26bbe025e9f5a2567433d6f2ec405c5e&units=imperial",
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