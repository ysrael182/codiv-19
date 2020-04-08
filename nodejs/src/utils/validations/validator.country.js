/**
 * @author Israel Yasis
 */
const sanitazadorCountry = require("../sanitazation/sanitazation.country");
let listValidCountries = require('../../config/api.codiv');

listValidCountries = listValidCountries.validCountries;

/**
 * @param {String} country
 * @return {Boolean}
 * @throws {Error}
 */
exports.validateCountry = (country) => {
    country = sanitazadorCountry.parseCountryName(country);
    if(listValidCountries.includes(country)) {
        return true;
    }
    throw new Error('Country does not match with a country of latin america.');
};