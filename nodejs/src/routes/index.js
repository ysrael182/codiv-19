/**
 * @author Israel Yasis
 */
const express = require("express");
const countryCodivRoutes = require('./country.covid');
const router = express.Router();

router.use("/codiv-countries", countryCodivRoutes);
module.exports = router;