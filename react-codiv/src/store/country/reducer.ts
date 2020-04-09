/**
 * @author Israel Yasis
 */
import {
        CountryState,
        LIST_COUNTRIES,
        UPDATE_COUNTRY,
        CountryActionTypes
        } from "./types";

const initialState: CountryState = {
    countries: []
};
export function countryReducer (
    state = initialState,
    action: CountryActionTypes
  ): CountryState {
    switch (action.type) {
      case LIST_COUNTRIES:
        return {
          countries: [...state.countries]
        };
      case UPDATE_COUNTRY:
        return state;
      default:
        return state;
    }
}