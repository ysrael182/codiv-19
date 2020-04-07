/**
 * @author Israel Yasis
 */
'use strict';

const express = require("express");
const countryCodivController = require("../controllers/country.covid");
const router = express.Router();

router
  .route("/:countryName")
  .get(countryCodivController.getCountryCovid);

module.exports = router;