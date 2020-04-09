/**
 * @author Israel Yasis 
 */
import { takeLatest, all, fork } from 'redux-saga/effects';
import { GET_COUNTRY, GET_LIST_COUNTRIES } from '../country/types';
import { getCountrySaga, getListCountriesSaga } from '../sagas/country.saga';

function* watchOnLoadCountries() {
    yield takeLatest(GET_LIST_COUNTRIES, getListCountriesSaga);
    yield takeLatest(GET_COUNTRY, getCountrySaga);
}
export default function* countrySaga() {
    yield all([fork(watchOnLoadCountries)]);
}