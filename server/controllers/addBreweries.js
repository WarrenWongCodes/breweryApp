const { Brewery } = require('../models/breweries.js');
const { getBreweriesByCity } = require('../apiHelpers/index.js');

// Add initial documents into MongoDB
const addBreweries = async (req, res) => {
  try {
    const { data } = await getBreweriesByCity();
    const response = await Brewery.insertMany(data);

    res.json({ response: response });
  } catch (error) {
    res.json(error);
  }
};

module.exports = addBreweries;
