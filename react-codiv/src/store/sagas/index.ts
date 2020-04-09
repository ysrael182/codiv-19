import { fork } from 'redux-saga/effects';
import watchCountryUpdate from './watchers';

export default function* startForman() {
  yield fork(watchCountryUpdate);
}