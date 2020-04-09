/**
 * @author Israel Yasis
 */
import {
        CountryState,
        GET_LIST_COUNTRIES,
        GET_COUNTRY,
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
      case GET_LIST_COUNTRIES:
        return {
            countries: [...state.countries]
        };
      case GET_COUNTRY:
        return state
      default:
        return state;
    }
}