const axios = require('axios');

const getBreweriesByCity = () => {
  // Issue: NodeJS Native compression issue: https://github.com/axios/axios/issues/1635
  let config = {
    method: 'get',
    url: 'https://api.openbrewerydb.org/breweries?by_city=San Diego&per_page=50',
    headers: {
      'Accept-encoding': 'gzip, deflate',
    },
  };

  return axios(config);
};

module.exports = getBreweriesByCity;
