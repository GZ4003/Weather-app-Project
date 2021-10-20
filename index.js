let weather = {
    "apiKey" : "90658557d4d33f9a3c13df76d1df5288",
    fetchWeather: function (city) {
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apiKey
        )
        .then((Response) => Response.json())
        .then((data) => console.log(data));
    },
    displayWeather: function (data){

    }
};