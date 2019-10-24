const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/2c90d975545f5f22c289b97950a10f3f/${latitude},${longitude}?units=si`;

  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callback('Unable to connect to weather service', undefined);
    } else if (body.error) {
      callback('Unable to find the location. Try another search', undefined);
    } else {
      callback(undefined, `It is ${body.currently.temperature} degrees out.`);
    }
  });
};

module.exports = forecast;
