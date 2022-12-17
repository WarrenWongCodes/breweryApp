const { getBreweriesByCity } = require('../apiHelpers/index.js');
const { Brewery } = require('../models/breweries.js');

const retrieveBreweries = async (req, res) => {
  try {
    const {data} = await getBreweriesByCity();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = retrieveBreweries;
