/**
 * @author Israel Yasis
 */

export interface Country {
    name: string;
}
export interface CountryState {
    countries: Country[];
}
export const UPDATE_COUNTRY = "UPDATE_COUNTRY";
export const LIST_COUNTRIES = "LIST_COUNTRIES";

interface UpdateCountryAction {
  type: typeof UPDATE_COUNTRY;
  payload: Country;
}

interface ListCountryAction {
  type: typeof LIST_COUNTRIES;
  meta: {
    timestamp: number;
  };
}

export type CountryActionTypes = UpdateCountryAction | ListCountryAction;