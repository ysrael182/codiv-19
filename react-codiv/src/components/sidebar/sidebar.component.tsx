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
 
  useEffect(() => {
    onGetListCountries();
  }, []);

  return (
    <div className="sidebar">
        <ul>
          <li className="active"><a>Latin American countries</a></li>
          {
          props.countries.map((country, i) => {
              // @ts-ignore
              return <ListItemCountry key={i} country = {country} />
          })
          };
        </ul>
    </div>
  );
}
export default SidebarComponent;