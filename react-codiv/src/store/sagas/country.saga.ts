import { getListCountries, getCountry } from '../../shared/country.service';
import { put, call } from 'redux-saga/effects';
import { 
    GetCountryRequestAction,
    GetListCountriesRequestAction
} from '../country/types';

export function* getCountrySaga({ country }: GetCountryRequestAction) {
    try {
        const { data } = yield call(getCountry, country);
    } catch (error) {
       //yield put(actionCreators.getLyricsFailure(error.response.data.error));
    }  
}
export function* getListCountriesSaga({}:GetListCountriesRequestAction) {
    try {
        const { data } = yield call(getListCountries);
    } catch (error) {
       //yield put(actionCreators.getLyricsFailure(error.response.data.error));
    }  
} 