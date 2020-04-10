/**
 * @author Israel Yasis
 */
import React, { FunctionComponent } from "react";
import { Country } from "../../shared/types";   
interface Props {
    country: Country
}
const ItemComponent: FunctionComponent<Props> = props =>  {
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