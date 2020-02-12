const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/weather', (req, res) => {
    let today = new Date().toISOString().slice(0, 10);
    let weatherData = getWeatherForecast(today);

    res.send(weatherData);
});

app.listen(port, () => console.log(`Weather api listening on port ${port}!`));

function getWeatherForecast(startDate) {
    return {
        "forecast:": [
            { "date": startDate, "high": 78, "low": 56 },
            { "date": startDate, "high": 78, "low": 56 },
            { "date": startDate, "high": 78, "low": 56 },
        ]
    };
}
