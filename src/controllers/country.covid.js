/**
 * @author Israel Yasis
 */
'use strict';

const countryCodivService = require("../services/country.covid");
exports.getCountryCovid = async function(req, res, next) {
    let countryName = parseCountryName(req);
    try {
        var countriesCodiv = await countryCodivService.getCountryCodiv({
            country: countryName
        });
        return res.status(200).json({
            status: 200,
            data: countriesCodiv,
            message: "Retrieve successfully the information"
        });   
    } catch(e) {
        return res.status(500).json({
            status: 500, 
            message: e.message
        });     
    }
};
exports.getCountryCovidApi =  async function(req, res, next) {
    let countryName = parseCountryName(req);
    try {
        var countriesCodiv = await countryCodivService.getCountryApi({
            country: countryName
        });
        return res.status(200).json({
            status: 200,
            data: countriesCodiv,
            message: "Retrieve successfully the information from the Api"
        });   
    } catch(e) {
        return res.status(500).json({
            status: 500, 
            message: e.message
        });     
    }
}
/**
 * 
 * @param {Object} req
 * @return {String} 
 */
function parseCountryName(req) {
    let countryName = req.params.countryName;
    if(countryName.length > 1) {
        countryName = countryName.charAt(0).toUpperCase() + countryName.slice(1)
    }
    return countryName;
}

