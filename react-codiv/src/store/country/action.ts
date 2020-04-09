
/**
 * @author Israel
 */
import { Country, UPDATE_COUNTRY, LIST_COUNTRIES } from "./types";

export function updateCountry(country: Country) {
  return {
    type: UPDATE_COUNTRY,
    payload: country
  };
}