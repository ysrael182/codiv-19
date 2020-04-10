/**
 * @author Israel Yasis
 */
import React, { FunctionComponent, useEffect } from "react";

import '../../styles/sidebar.scss';
import ListItemCountry from "../item-country/item.container";
import { Country }  from "../../shared/types";

interface Props {
  countries: Country[]; //Fix this
  onGetListCountries(): void
}
const SidebarComponent: FunctionComponent<Props> = props =>  {
  const { countries, onGetListCountries } = props;
 
  //;

  return (
    <div className="sidebar">
        <button onClick={onGetListCountries}>Show Countries</button>
        <ul>
          {
          console.log(props.countries)
          /*props.countries.map((country, i) => {
              return <ListItemCountry country = {country} />
          })*/
          };
        </ul>
    </div>
  );
}
export default SidebarComponent;