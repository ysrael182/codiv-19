/**
 * @author Israel Yasis
 */
import { Country } from '../../shared/types';
export const GET_COUNTRY = "countryActionType/GET_COUNTRY";
export const GET_LIST_COUNTRIES = "countryActionType/GET_LIST_COUNTRIES";

export interface GetCountryAction {
  type: typeof GET_COUNTRY;
  country: string;
}

export interface GetListCountriesAction {
  type: typeof GET_LIST_COUNTRIES;
}
export const GET_COUNTRY_REQUEST = "countryActionType/GET_COUNTRY_REQUEST";
export const GET_LIST_COUNTRIES_REQUEST = "countryActionType/GET_LIST_COUNTRIES_REQUEST";

export interface GetCountryRequestAction {
  type: typeof GET_COUNTRY_REQUEST;
}

export interface GetListCountriesRequestAction {
  type: typeof GET_LIST_COUNTRIES_REQUEST;
}

export type CountryActionTypes =
  | GetCountryAction
  | GetListCountriesAction
  | GetListCountriesRequestAction
  | GetCountryRequestAction;