
import { Router } from "express";
import { param } from 'express-validator';
import { validateCountry } from "../utils/validations/CountryValidator";
import { parseCountryName } from "../utils/sanitazation/SanitazationCountry";
import { CountryCodivController } from "../controllers/CountryCodivController";
/**
 * @author Israel Yasis
 */
export class CountryCodivRouter {
    private router: Router;
    private countryCodivController: CountryCodivController;
    constructor() {
        this.countryCodivController = new CountryCodivController();
        this.router = Router();
        this.init();
    }
    init(): void {
        this.router
        .route("/:countryName")
        .get([
            param('countryName').customSanitizer(value => parseCountryName(value)),
            param('countryName').custom(value => validateCountry(value))
        ], this.countryCodivController.getCountryCovid);

        this.router
        .route("/")
        .get(this.countryCodivController.getAvailableCountries);

        
    }
    getRouter(): Router {
        return this.router;
    }
}
const countryCodivRouter = new CountryCodivRouter();
countryCodivRouter.init();

export const router = countryCodivRouter.getRouter();