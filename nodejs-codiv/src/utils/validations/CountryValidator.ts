/**
 * @author Israel Yasis
 */
import { apiConfig  } from '../../config/ApiConfig';
import { parseCountryName } from "../sanitazation/SanitazationCountry";

export function validateCountry (country: string): boolean {
    country = parseCountryName(country);
    if(apiConfig.validCountries.indexOf(country) !== -1) {
        return true;
    }
    throw new Error('Country does not match with a country of latin america.');
};