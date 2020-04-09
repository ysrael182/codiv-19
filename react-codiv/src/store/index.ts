/**
 * @author Israel Yasis
 */
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { countryReducer } from './country/reducer';
import rootSaga from './sagas';
const rootReducer = combineReducers({
    countries: countryReducer
});
export type AppState = ReturnType<typeof rootReducer>;
export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  );
  return {
    ...store,
    runSaga: sagaMiddleware.run(rootSaga)
  };
}