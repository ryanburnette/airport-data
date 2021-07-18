'use strict';

var axios = require('axios');

module.exports = function(opts) {
  var url = 'http://www.airport-data.com/api/ap_info.json?';
  if (!opts) {
    opts = {};
  }
  if (opts.icao && opts.iata) {
    throw new Error('opts.icao and opts.iata are mutually exclusive');
  }
  if (!opts.icao && !opts.iata) {
    throw new Error('no airport provided by opts.icao or opts.iata');
  }
  if (opts.icao) {
    url = url + 'icao=' + opts.icao;
  }
  if (opts.iata) {
    url = url + 'iata=' + opts.iata;
  }
  return axios.get(url).then(function(resp) {
    if (resp.status !== 200) {
      throw new Error('airport-data.com api error');
    }
    if (resp.data.error) {
      throw new Error(resp.data.error);
    }
    return resp.data;
  });
};
