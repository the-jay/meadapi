const request = require('request');

const forecast = (lat, long, callback) => {
  const url =
    'https://api.darksky.net/forecast/443d16e5c9d1546ee73b896f65f8f1fe/' +
    lat +
    ',' +
    long;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location services!', undefined);
    } else if (body.error) {
      callback('Unable to find location.', undefined);
    } else {
      callback(
        undefined,
        body.daily.summary +
          ' It is currently ' +
          body.currently.temperature +
          ' degrees out. There is ' +
          body.currently.precipProbability +
          '% chance of rain, and the humidity is ' +
          body.currently.humidity
      );
    }
  });
};

module.exports = forecast;
