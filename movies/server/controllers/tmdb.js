const http = require('http');
const config = require('../config')

const BASE_URI = "http://api.themoviedb.org/3";
const IMAGES_URI = "http://image.tmdb.org/t/p";
const TIMEOUT = 5000;

module.exports.get = (tmdbId, callback) => {
    const query_str = `/movie/${tmdbId}?api_key=${config.api_key}`;
    const options = {
        host: BASE_URI,
        path: query_str
    };

    http.get(BASE_URI+query_str, (res) => {
        const { statusCode } = res;
        const contentType = res.headers['content-type'];
      
        let error;
        if (statusCode !== 200) {
          error = new Error('Request Failed.\n' +
                            `Status Code: ${statusCode}`);
        } else if (!/^application\/json/.test(contentType)) {
          error = new Error('Invalid content-type.\n' +
                            `Expected application/json but received ${contentType}`);
        }
        if (error) {
          console.error(error.message);
          // consume response data to free up memory
          res.resume();

          callback(e, null);
          return;
        }
      
        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => {
          try {
            const parsedData = JSON.parse(rawData);
            callback(null, parsedData);
          } catch (e) {
            callback(e, null);
          }
        });
      }).on('error', (e) => {
        callback(e, null);
      });
}   
