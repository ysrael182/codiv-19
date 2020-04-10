/**
 * @author Israel Yasis
 */
import {
        GET_LIST_COUNTRIES,
        GET_COUNTRY,
        CountryActionTypes
        } from "../actionTypes/countryActionType";
import { Country } from "../../shared/types";      
export interface CountryState {
  countries: Country[]
}
const initialState: CountryState = {
  countries: []
};
export function countryReducer (
    state: CountryState = initialState,
    action: CountryActionTypes
  ): CountryState {
    console.log(action.type);
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