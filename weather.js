const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

let apiKey = process.env.WEATHER_API_KEY;
console.log(apiKey);

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/weather', (req, res) => {
    let today = new Date().toISOString().slice(0, 10);
    let weatherData = getWeatherForecast(today);

    res.send(weatherData);
});

app.get('/current-weather', (req, res) => {
    if (Object.keys(req.query).length === 0) {
        res.status(400).send('Please provide a city.');
        res.send()
    }

    let city = req.query.city;

    let weatherResponse = getCurrentWeather(city);

    res.send(weatherResponse);
});

app.listen(port, () => console.log(`Weather api listening on port ${port}!`));

function getCurrentWeather(city) {
    // axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=fishers&appid=' + apiKey)
        .then(response => {
            console.log(response);
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.log(error);
            return error;
        });
}

