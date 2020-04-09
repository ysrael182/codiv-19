/**
 * @author Israel Yasis
 */
import { ResponseCountry, ResponseListCountry } from './types';
import axios from 'axios';

export async function getListCountries(): Promise<ResponseListCountry> {
    const GET_ALL_COUNTRIES_ENDPOINT = '';
    return await axios.get(GET_ALL_COUNTRIES_ENDPOINT)
};
export async function getCountry(
    country: String
): Promise<ResponseCountry> {
    const GET_COUNTRY_ENDPOINT = '';
    return axios.get(GET_COUNTRY_ENDPOINT+"/"+country);
};