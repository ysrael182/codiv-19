
/**
 * @author Israel Yasis
 */
import { 
   GET_COUNTRY, 
   GET_LIST_COUNTRIES, 
   GET_COUNTRY_REQUEST,
   GET_LIST_COUNTRIES_REQUEST,
   GET_LIST_COUNTRY_SUCCESS,
   GET_COUNTRY_SUCESS,
   GetCountryRequestAction,
   GetCountrySuccessAction,
   GetCountryAction,
   GetListCountriesAction,
   GetListCountriesRequestAction,
   GetListCountriesSuccessAction } from "../actionTypes/countryActionType";
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
export function getCountrySuccess(country: Country): GetCountrySuccessAction {
  return {
    type: GET_COUNTRY_SUCESS,
    country
  }
}
export function getListCountries(): GetListCountriesAction {
  return {
     type: GET_LIST_COUNTRIES,
     
  };  
}
export function getListCountriesSuccess(countries: Country[]): GetListCountriesSuccessAction {
  return {
    type: GET_LIST_COUNTRY_SUCCESS,
    countries
  }
}
export function getListCountriesAction(): GetListCountriesRequestAction {
  return {
    type: GET_LIST_COUNTRIES_REQUEST
  };
}