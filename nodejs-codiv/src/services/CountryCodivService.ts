import { apiConfig } from "../config/ApiConfig";
import axios, { AxiosResponse }  from "axios";
import * as types from "./types";
import { CountryCodivModel, ICountryCodiv } from "../model/CountryCodivModel";
/**
 * @author Israel Yasis
 */
export class CountryCodivService {

    constructor() {
        this.getCountryCodiv = this.getCountryCodiv.bind(this);
        this.getAvailableCountries = this.getAvailableCountries.bind(this);
        this.getCountryApi = this.getCountryApi.bind(this);
    }

    public async getCountryCodiv(countryName: string): Promise<ICountryCodiv> {
        
        let countryCodiv = await CountryCodivModel.findOne({ name: countryName }).exec();
        const currentTime = Date.now();
        if (countryCodiv == null || (currentTime - countryCodiv.lastUpdate > apiConfig.apiRefresh)) {
            const informationCodiv = await this.getCountryApi(countryName);

            if (countryCodiv == null && informationCodiv) {
                await new CountryCodivModel(informationCodiv).save(function (error) {
                    if (error) {
                        throw new Error("Error creating a new register of codiv.");
                    }
                });
                countryCodiv = informationCodiv;
            } else {
                countryCodiv = await CountryCodivModel.findOneAndUpdate(
                    { name: countryName },
                    informationCodiv,
                    function (error) {
                        if (error) {
                            throw new Error("Error updating a register codiv.");
                        }
                    });
            }
        }
        return countryCodiv;
    }

    public getAvailableCountries(): string[] {
        return apiConfig.validCountries;
    }


    public async getCountryApi(countryName: string): Promise<ICountryCodiv | void> {
      
        return axios({
            url: apiConfig.apiV1URL,
            method: 'GET',
            headers: {
                "x-rapidapi-host": apiConfig.apiHost,
                "x-rapidapi-key": apiConfig.apiKey,
                "content-type" : "application/octet-stream"
            },
            params: { country: countryName }
        }).then( (response ) => {
            const responseData = response.data;
            if (responseData == null || response.data.error) {
                throw new Error("Error from api");
            }
            const data = responseData.data.covid19Stats;
            
            let deaths = 0, confirmed = 0, recovered = 0;
            data.forEach( element => {
                deaths += element.deaths;
                confirmed += element.confirmed;
                recovered += element.recovered;
            });
            const countryResponse = <ICountryCodiv> {
                name: countryName,
                deaths: deaths,
                confirmed: confirmed,
                recovered: recovered,
                lastUpdate: Date.now()
            };
            return countryResponse;
        }).catch(response => {
            console.log(response);
        });    
    };
}