/**
 * @author Israel Yasis
 */
import { CountryActionTypes, GET_LIST_COUNTRY_SUCCESS, GET_COUNTRY_SUCESS } from "../actionTypes/countryActionType";
import { Country } from "../../shared/types";

export interface CountryState {
  countries: Country[]
}
const initialState: CountryState = {
  countries: []
};

export function countryReducer(
  state: CountryState = initialState,
  action: CountryActionTypes
): CountryState {
  switch (action.type) {
    case GET_COUNTRY_SUCESS:
      return updateListCountry(state, action.country);
    case GET_LIST_COUNTRY_SUCCESS:

      return {
        countries: sortByNumberOfDeaths(action.countries)
      }
    default:
      return state;
  }
}
function updateListCountry(state: CountryState, country: Country): CountryState {
  if (country != null) {
    const newCountries = state.countries.map(countryMap => {
      if (country.name === countryMap.name) {
        return country;
      }
      return countryMap;
    });
    return {
      countries: newCountries
    }
  } else {
    return state;
  }
}
function sortByNumberOfDeaths(countries: Country[]): Country[] {
  const sortedCountries =  countries.sort((a: Country, b: Country) => {
    if (a.deaths < b.deaths) {
      return 1;
    } else if (a.deaths > b.deaths) {
      return -1;
    }
    return 0;
  });
  return sortedCountries;
}