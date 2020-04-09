
/**
 * @author Israel
 */
import { Country,
   GET_COUNTRY, 
   GET_LIST_COUNTRIES, 
   GET_COUNTRY_REQUEST,
   GET_LIST_COUNTRIES_REQUEST,
   GetCountryRequestAction,
   GetCountryAction,
   GetListCountriesAction,
   GetListCountriesRequestAction } from "./types";

export function getCountry(country: Country): GetCountryAction {
  return {
    type: GET_COUNTRY,
    payload: country
  };
}
export function getCountryRequest(country: string): GetCountryRequestAction{
  return {
    type: GET_COUNTRY_REQUEST,
    country
  };
}
export function getListCountries(countries: String[]): GetListCountriesAction {
  return {
     type: GET_LIST_COUNTRIES,
     payload: countries
  };  
}
export function getListCountriesAction(): GetListCountriesRequestAction {
  return {
    type: GET_LIST_COUNTRIES_REQUEST
  };
}