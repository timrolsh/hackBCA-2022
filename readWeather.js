const axios = require("axios");
const fs = require("fs");

const options = {
    method: "GET",
    url: "https://community-open-weather-map.p.rapidapi.com/weather",
    params: {
        q: "Hackensack,US",
        lat: "0",
        lon: "0",
        callback: "test",
        id: "0",
        lang: "en",
        units: "imperial",
        mode: "json",
    },
    headers: {
        "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
        "X-RapidAPI-Key": "a30b1ffca6msh55ee39a16f602e9p1d4d43jsna8de07bea9f6",
    },
};

axios
    .request(options)
    .then(function (response) {
        fs.writeFileSync(
            "data.json",
            response.data.substring(5, response.data.length - 1)
        );
    })
    .catch(function (error) {
        console.error(error);
    });
