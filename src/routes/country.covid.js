/**
 * @author Israel Yasis
 */
import { Router }  from "express";
const countryCodivController = require("../controllers/country.covid");
const countryControler = countryCodivController();
const router = Router();
router
  .route("/")
  .get(countryControler.getCountryCodiv);

router
  .route("/:country")
  .get(countryCodivController.getCountryCodiv);

export default router;