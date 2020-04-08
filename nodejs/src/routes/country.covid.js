/**
 * @author Israel Yasis
 */
'use strict';

const express = require("express");
const countryCodivController = require("../controllers/country.covid");
const validatorCountry = require("../utils/validations/validator.country");
const sanitazationCountry = require("../utils/sanitazation/sanitazation.country");
const { param } = require('express-validator');
const router = express.Router();

router
  .route("/:countryName")
  .get([
    param('countryName').customSanitizer(value => sanitazationCountry.parseCountryName(value)),
    param('countryName').custom(value => validatorCountry.validateCountry(value))
  ], countryCodivController.getCountryCovid);

router
  .route("/test-api/:countryName")
  .get(countryCodivController.getCountryCovidApi);
  
module.exports = router;