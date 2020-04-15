/**
 * @author Israel Yasis
 */
import { getCountry, getListCountries } from '../../shared/country.service';
import { put, call, takeEvery, takeLatest, all, fork } from 'redux-saga/effects';
import { GET_COUNTRY, GET_LIST_COUNTRIES } from '../actionTypes/countryActionType';
import { 
    getCountryRequest,
    getListCountriesAction,
    getCountrySuccess,
    getListCountriesSuccess
} from "../actionCreator/countryActionCreator";
import {
    GetCountryAction,
    GetListCountriesAction
} from "../actionTypes/countryActionType";

function* getCountrySaga({ country }: GetCountryAction) {
    try {
        yield put(getCountryRequest());
        const { data } = yield call(getCountry, country);
        yield put(getCountrySuccess(data.data));
    } catch (error) {
        console.log(error);
    }  
}
function* getListCountriesSaga({}: GetListCountriesAction ) {
    try {
        yield put(getListCountriesAction());
        const { data } = yield call(getListCountries);
        yield put(getListCountriesSuccess(data.data))
    } catch (error) {
        console.log(error);
    }  
}
function* watchOnLoadCountries() {
    yield takeLatest(GET_LIST_COUNTRIES, getListCountriesSaga);
    yield takeLatest(GET_COUNTRY, getCountrySaga);
}
export default function* countrySaga() {
    yield all([fork(watchOnLoadCountries)]);
}