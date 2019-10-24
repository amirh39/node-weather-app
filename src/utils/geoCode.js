const request = require('request');

const geoCode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?limit=1&access_token=pk.eyJ1IjoiYWtob3NoYmFraHQiLCJhIjoiY2sxcXlqem55MDIwODNjcWljNnpkOWRkaCJ9.iDM7heryYxuXID1SfAJIDw`;

  request({ url, json: true }, (err, { body } = {}) => {
    if (err) {
      callback('Unable to connect to location service', undefined);
    } else if (body.features.length === 0) {
      callback('Unable to find the location. Try another search', undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      });
    }
  });
};

module.exports = geoCode;
