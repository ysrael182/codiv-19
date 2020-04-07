/**
 * @author Israel Yasis
 */
'use strict';

const express = require("express");
const countryCodivController = require("../controllers/country.covid");
const router = express.Router();
router
  .route("/")
  .get(countryCodivController.getCountriesCodiv);

router
  .route("/:country")
  .get(countryCodivController.getCountryCodiv);

module.exports = router;