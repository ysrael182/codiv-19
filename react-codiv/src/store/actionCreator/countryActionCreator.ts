
/**
 * @author Israel
 */
import { 
   GET_COUNTRY, 
   GET_LIST_COUNTRIES, 
   GET_COUNTRY_REQUEST,
   GET_LIST_COUNTRIES_REQUEST,
   GetCountryRequestAction,
   GetCountryAction,
   GetListCountriesAction,
   GetListCountriesRequestAction } from "../actionTypes/countryActionType";
import { Country } from '../../shared/types';

export function getCountry(country: string): GetCountryAction {
  return {
    type: GET_COUNTRY,
    country
  };
}
export function getCountryRequest(): GetCountryRequestAction {
  return {
    type: GET_COUNTRY_REQUEST
  };
}

export function getListCountries(): GetListCountriesAction {
  return {
     type: GET_LIST_COUNTRIES,
     
  };  
}
export function getListCountriesAction(): GetListCountriesRequestAction {
  return {
    type: GET_LIST_COUNTRIES_REQUEST
  };
}