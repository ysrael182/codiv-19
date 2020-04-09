/**
 * @author Israel Yasis
 */

export interface Country {
    name: string;
}

export const GET_COUNTRY = "GET_COUNTRY";
export const GET_LIST_COUNTRIES = "GET_LIST_COUNTRIES";

export interface GetCountryAction {
  type: typeof GET_COUNTRY;
  payload: Country;
}

export interface GetListCountriesAction {
  type: typeof GET_LIST_COUNTRIES;
  payload: Country[]
}

export const GET_LIST_COUNTRIES_REQUEST = "GET_LIST_COUNTRIES_REQUEST";

export interface GetListCountriesRequestAction {
  type: typeof GET_LIST_COUNTRIES_REQUEST;
}

export const GET_COUNTRY_REQUEST = "GET_COUNTRY_REQUEST";
export interface GetCountryRequestAction {
  type: typeof GET_COUNTRY_REQUEST;
  country: String
}
export type CountryActionTypes =
  | GetCountryAction
  | GetListCountriesAction
  | GetListCountriesRequestAction
  | GetCountryRequestAction;