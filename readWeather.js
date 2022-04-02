const axios = require("axios");
const fs = require("fs");

const city = "Hackensack,NJ";
const url =
    "https://api.weatherapi.com/v1/forecast.json?key=55daed32ec294eababf141438220204&q=" +
    city +
    "&days=7&aqi=no&alerts=no";

axios.get(url).then(function (response) {
    fs.writeFileSync("data.json", JSON.stringify(response.data));
});
