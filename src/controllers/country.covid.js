/**
 * @author Israel Yasis
 */
'use strict';

const countryCodivService = require("../services/country.covid");
var countryCodivController = {
    getCountriesCodiv = function(req, res, next) {
        return res.status(200).json({"response": "OK"})
    },
    getCountryCodiv = function(req, res, next) {
        return res.status(200).json({"response": "ok"});
    }
};
module.exports = countryCodivController;
