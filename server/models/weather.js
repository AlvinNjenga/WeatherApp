const request = require('request-promise');

const WEATHER_API_KEY = "f63fd6309da908ea8a934dc5f89a2fd7";

class Weather {
    static retrieveByCity (city, callback) {
        request({
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${WEATHER_API_KEY}&units=imperial`,
            json: true,
        }).then(function (res) {
            callback(res);
        }).catch(function (err){
            console.log(err);
            callback({ error: 'Could not reach OpenWeatherMap API.'})
        });
    }
}

module.exports = Weather;