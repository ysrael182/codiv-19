/**
 * @author Israel Yasis
 */
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { countryReducer } from './reducer/countryReducer';
import isLoadingReducer from "./reducer/isLoadingReducer";
import rootSaga from './sagas/rootSaga';

const rootReducer = combineReducers({
    countries: countryReducer,
    //isLoading: isLoadingReducer
});
export type AppState = ReturnType<typeof rootReducer>;
const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
export default configureStore;