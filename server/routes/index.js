const router = require('express').Router();
const {
  retrieveBreweries,
  addBreweries
} = require('../controllers/index.js');

router.get('/', (req, res) => {
  res.send('hello world');
});

// Retrieves from Open Brewery API (https://www.openbrewerydb.org/documentation)
router.get('/breweries', retrieveBreweries);

// Add brewery API Data to MongoDB data store
router.post('/breweries', addBreweries);

module.exports = router;
