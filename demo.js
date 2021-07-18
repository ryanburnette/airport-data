'use strict';

var AirportData = require('./index.js');

(async function () {
  console.log(await AirportData({ icao: 'KCRG' }));
})();
