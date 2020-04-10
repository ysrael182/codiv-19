/**
 * @author Israel Yasis
 */
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppState } from "../../store";
import { CountryActionTypes }  from "../../store/actionTypes/countryActionType";
import ItemComponent from "./item.component";

const mapDispatchToProps = (dispatch: Dispatch<CountryActionTypes>) => ({
  
});
const mapStateToProps = (state: AppState) => {
    
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)( ItemComponent );