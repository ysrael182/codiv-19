/**
 * @author Israel Yasis
 */
'use strict';

const countryCodivService = require("../services/country.covid");
exports.getCountryCovid = async function(req, res, next) {
    try {
        let countryName = req.params.countryName;
        if(countryName.length > 1) {
            countryName = countryName.charAt(0).toUpperCase() + countryName.slice(1)
        }
        console.log(countryName);
        var countriesCodiv = countryCodivService.getCountryCodiv({
            country: countryName
        });
        
        return res.status(200).json({
            status: 200,
            data: countriesCodiv,
            message: ""
        });   
    } catch(e) {
        return res.status(500).json({
            status: 500, 
            message: e.message
        });     
    }
};

