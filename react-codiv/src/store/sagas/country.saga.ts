/**
 * @author Israel Yasis
 */
import { getCountry } from '../../shared/country.service';
import { put, call, takeEvery, all, fork } from 'redux-saga/effects';
import { GET_COUNTRY, GET_LIST_COUNTRIES } from '../actionTypes/countryActionType';
import { 
    getCountryRequest,
    getListCountriesAction
} from "../actionCreator/countryActionCreator";
import {
    GetCountryAction,
    GetListCountriesAction
} from "../actionTypes/countryActionType";

function* getCountrySaga({ country }: GetCountryAction) {
    try {
        yield put(getCountryRequest());
        const { data } = yield call(getCountry, country);
    } catch (error) {
       //yield put(actionCreators.getLyricsFailure(error.response.data.error));
    }  
}
function* getListCountriesSaga({}: GetListCountriesAction ) {
    try {
        yield put(getListCountriesAction());
        const { data } = yield call(getListCountriesAction);
    } catch (error) {
       //yield put(actionCreators.getLyricsFailure(error.response.data.error));
    }  
}
function* watchOnLoadCountries() {
    yield takeEvery(GET_LIST_COUNTRIES, getListCountriesSaga);
    yield takeEvery(GET_COUNTRY, getCountrySaga);
}
export default function* countrySaga() {
    yield all([fork(watchOnLoadCountries)]);
}