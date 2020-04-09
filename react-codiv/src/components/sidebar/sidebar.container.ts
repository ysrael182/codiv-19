/**
 * @author Israel Yasis
 */
import { connect } from "react-redux";
import { Dispatch } from "redux";
import '../styles/sidebar.scss';
import { AppState } from "../../store";
import { CountryActionTypes }  from "../../store/country/types";
import { getListCountriesAction } from "../../store/country/action";
import SidebarComponent from "./sidebar.component";

const mapDispatchToProps = (dispatch: Dispatch<CountryActionTypes>) => ({
  onGetListCountries: () => {
    dispatch(getListCountriesAction());
  }
});
const mapStateToProps = (state: AppState) => {
    return {
      countries: state.countries
    };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarComponent);