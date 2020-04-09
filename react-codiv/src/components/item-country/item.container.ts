/**
 * @author Israel Yasis
 */
import { connect } from "react-redux";
import { Dispatch } from "redux";
import '../styles/sidebar.scss';
import { AppState } from "../../store";
import { CountryActionTypes }  from "../../store/country/types";
import { getListCountriesAction } from "../../store/country/action";
import ItemComponent from "./item.component";

const mapDispatchToProps = (dispatch: Dispatch<CountryActionTypes>) => ({
  
});
const mapStateToProps = (state: AppState) => {
    
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)( ItemComponent );