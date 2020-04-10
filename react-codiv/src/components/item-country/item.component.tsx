/**
 * @author Israel Yasis
 */
import React, { FunctionComponent, useState } from "react";
import { Country } from "../../shared/types";
import '../../styles/list.item.scss';
interface Props {
    country: Country,
    onGetCountry(countryName: String): void
}
const ItemComponent: FunctionComponent<Props> = props =>  {
    const { country, onGetCountry } = props;
    const [ openCountry, setOpenCountry] = useState(false);
    const listClassName = openCountry ? "country-item active" : 'country-item';
    return (
        <li className={listClassName}>
            <a onClick ={ () => { onGetCountry(props.country.name); setOpenCountry(!openCountry); } }>
              <span className="country-title">{country.name}</span>
              { !openCountry && 
              <svg className="bi bi-chevron-left" width="1em" height="0.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 010 .708L5.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z" clipRule="evenodd"/>
              </svg> }
              { openCountry && 
                <svg className="bi bi-chevron-down" width="1em" height="0.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd"/>
                </svg>
              }
            </a>
            { openCountry && 
            <div className="informational-box">
                <span>Confirmed Cases: {country.confirmed}</span>
                <span>Deaths: {country.deaths}</span>
                <span>Recovered: {country.recovered}</span>
            </div> }
            
        </li>
    );
};
export default ItemComponent;