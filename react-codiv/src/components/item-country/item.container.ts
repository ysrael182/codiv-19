/**
 * @author Israel Yasis
 */
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppState } from "../../store";
import { CountryActionTypes }  from "../../store/actionTypes/countryActionType";
import ItemComponent from "./item.component";
import { getCountry } from "../../store/actionCreator/countryActionCreator";

const mapDispatchToProps = (dispatch: Dispatch<CountryActionTypes>) => ({
  onGetCountry: (countryName: string) => {
    dispatch(getCountry(countryName));
  }
});
export default connect(
  null,
  mapDispatchToProps
)( ItemComponent );