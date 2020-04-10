/**
 * @author Israel Yasis
 */
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppState } from "../../store";
import { CountryActionTypes }  from "../../store/actionTypes/countryActionType";
import { getListCountries } from "../../store/actionCreator/countryActionCreator";
import SidebarComponent from "./sidebar.component";

const mapDispatchToProps = (dispatch: Dispatch<CountryActionTypes>) => ({
  onGetListCountries: () => {
    dispatch(getListCountries());
  }
});
const mapStateToProps = (state: AppState) => {
    return {
       countries: state.countries.countries
    };
};
export default connect (
  mapStateToProps,
  mapDispatchToProps
  // @ts-ignore
) ( SidebarComponent );