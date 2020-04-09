/**
 * @author Israel Yasis
 */
'use strict';

const countryCodivService = require("../services/country.covid");
const { validationResult }  = require("express-validator/check");

exports.getCountryCovid = async function(req, res, next) {
    let validation = validationResult(req);
    if (!validation.isEmpty()) {
        return res.status(400).json({ errors: validation.array()});
    }
    try {
        var countriesCodiv = await countryCodivService.getCountryCodiv({
            country: req.params.countryName
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
    
    try {
        var countriesCodiv = await countryCodivService.getCountryApi({
            country: req.params.countryName
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
exports.getAvailableCountries = async function(req, res, next) {
    
    try {
        var countries = countryCodivService.getAvailableCountries();
        return res.status(200).json({
            status: 200,
            data: countries,
            message: "Retrieve successfully the information"
        });   
    } catch(e) {
        return res.status(500).json({
            status: 500, 
            message: e.message
        });     
    }
};
