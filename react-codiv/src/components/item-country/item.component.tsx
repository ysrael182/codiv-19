/**
 * @author Israel Yasis
 */
import React, { FunctionComponent } from "react";
import { Country }  from "../../store/country/types";
interface Prop {
    country: Country
}
const ItemComponent: FunctionComponent<Prop> = props =>  {
    const { country } = props;
    return (
        <li>
            <div>
                <span className="country-title">{props.country.name}</span>
            </div>    
        </li>
    );
};
export default ItemComponent;