/**
 * @author Israel Yasis
 */
const mongoose = require('mongoose');

const CountryCovidSchema  = new mongoose.Schema({
    city: String,
    province: String,
    country: String,
    lastUpdate: Date,
    keyId: Array,
    confirmed: Number,
    deaths: Number,
    recover: Number
});
const CountryCodiv = mongoose.model('CountryCodiv', CountryCovidSchema);

module.exports = CountryCodiv;