/**
 * @author Israel Yasis
 */
const express = require("express");
const countryCodivRoutes = require('./country.covid');
const router = express.Router();

router.use("/countries-codiv", countryCodivRoutes);
module.exports = router;