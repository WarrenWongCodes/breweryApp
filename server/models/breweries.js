const mongoose = require('mongoose');

const brewerySchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
  name: String,
  brewery_type: String,
  street: String,
  address_2: String | null,
  address_3: String | null,
  city: String,
  state: String,
  county_province: String | null,
  postal_code: String,
  country: String,
  longitude: String,
  latitude:String,
  phone: String,
  website_url:String,
  updated_at: String,
  created_at: String,
});

const Brewery = mongoose.model('Brewery', brewerySchema);

module.exports = {
  Brewery,
};
