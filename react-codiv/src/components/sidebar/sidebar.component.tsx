/**
 * @author Israel Yasis
 */
import React, { FunctionComponent, useEffect } from "react";

import '../../styles/sidebar.scss';
import ListItemCountry from "../item-country/item.container";
import { Country }  from "../../store/country/types";

interface Prop {
  countries: Country[];
  onGetListCountries(): void
}
const SidebarComponent: FunctionComponent<Prop> = props =>  {
  const { countries, onGetListCountries } = props;
 
  useEffect(() => {
    onGetListCountries();
  })

  return (
    <div className="sidebar">
        <ul>
        {props.countries.map((country, i) => {
            <ListItemCountry />
        })};
        </ul>
    </div>
  );
}
export default SidebarComponent;