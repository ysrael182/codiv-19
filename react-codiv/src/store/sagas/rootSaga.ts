/**
 * @author IsraelYasis
 */
import { all, fork } from 'redux-saga/effects';
import countrySaga from './country.saga';

export default function* rootSaga() {
  yield all([fork(countrySaga)]);
}