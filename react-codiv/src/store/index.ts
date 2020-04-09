/**
 * @author Israel Yasis
 */
import { createStore, combineReducers } from "redux";
import { countryReducer } from './country/reducer';
const rootReducer = combineReducers({
    countries: countryReducer
});
export type AppState = ReturnType<typeof rootReducer>;
export default function configureStore() {
  
    const store = createStore(
      rootReducer
    );
  
    return store;
}