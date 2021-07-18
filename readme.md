# @ryanburnette/airport-data

Airport-Data.com's airport data API in Node.js. Does not take the API's rate
limiting into account.

## Usage

```js
var airportData = require('@ryanburnette/airport-data');

airportData({icao: 'KATL'}).then(function(airport) {
  console.log(airport);
});
```
