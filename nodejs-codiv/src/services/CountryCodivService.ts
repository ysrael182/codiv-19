import { apiConfig } from "../config/ApiConfig";
import axios from "axios";
import { CountryCodivModel, ICountryCodiv } from "../model/CountryCodivModel";

/**
 * @author Israel Yasis
 */
export class CountryCodivService {

    constructor() {
        this.getCountryCodiv = this.getCountryCodiv.bind(this);
        this.getAllCountries = this.getAllCountries.bind(this);
        this.getCountryApi = this.getCountryApi.bind(this);
        this.getCountryCodivByQuery = this.getCountryCodivByQuery.bind(this);
        this.createNewCountryCodiv = this.createNewCountryCodiv.bind(this);
        this.findAndUpdateCountryCodiv = this.findAndUpdateCountryCodiv.bind(this);
    }

    private async getCountryCodivByQuery(query: Object): Promise<ICountryCodiv> {
        return CountryCodivModel.findOne(query).exec();
    }
    private async getCountriesCodivByQuery(query: Object): Promise<ICountryCodiv[]> {
        return CountryCodivModel.find(query).exec();
    }
    private async createNewCountryCodiv(countryModel: ICountryCodiv): Promise<ICountryCodiv> {
        return new CountryCodivModel(countryModel).save(function (error) {
            if (error) {
                throw new Error("Error creating a new register of codiv.");
            }
        });
    }
    private async findAndUpdateCountryCodiv(query: Object, countryData: ICountryCodiv): Promise<ICountryCodiv> {
        return CountryCodivModel.findOneAndUpdate(query, countryData, function (error) {
            if (error) {
                throw new Error("Error updating a register codiv.");
            }
        });
    }

    public async getCountryCodiv(countryName: string): Promise<ICountryCodiv> {
        
        let countryCodiv = await this.getCountryCodivByQuery({name: countryName});
        if (countryCodiv != null && (Date.now() - countryCodiv.lastUpdate < apiConfig.apiRefresh)) {
            return countryCodiv;    
        }
        const codivApi = await this.getCountryApi(countryName);
        if(codivApi == null) {
            throw new Error("Invalid Response API");
        }
        if(countryCodiv == null) {
            await this.createNewCountryCodiv(codivApi);
            countryCodiv = codivApi;
        } else {
            countryCodiv = await this.findAndUpdateCountryCodiv({ name: countryName }, codivApi);
        }
        return countryCodiv;
    }

    public async getAllCountries(): Promise<ICountryCodiv[]> {
        const countries = apiConfig.validCountries;
        return this.getCountriesCodivByQuery({name: {"$in": countries}});
    }


    public async getCountryApi(countryName: string): Promise<ICountryCodiv> {
      
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
            return null;
        });    
    };
}