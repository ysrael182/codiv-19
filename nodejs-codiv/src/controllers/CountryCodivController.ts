/**
 * @author Israel Yasis
 */
import { validationResult }  from "express-validator";
import { CountryCodivService } from "../services/CountryCodivService";
import { Request, Response, NextFunction} from 'express';
import { ICountryCodivDTO, ICountryCodivDTOBuilder } from "../dto/countryDTO";
import * as types from "./types";
import { apiConfig } from "../config/ApiConfig";

export class CountryCodivController {

    private countryCodivService: CountryCodivService;
    constructor() {
        this.getCountryCovid = this.getCountryCovid.bind(this);
        this.getCountryCovidApi = this.getCountryCovidApi.bind(this);
        this.getAvailableCountries = this.getAvailableCountries.bind(this);
        this.countryCodivService = new CountryCodivService();
    }
    
    async getCountryCovid(
        req: Request, 
        res: Response<types.ResponseError | types.ResponseSimple<ICountryCodivDTO>>, 
        next: NextFunction
        ) : Promise<Response <types.ResponseError | types.ResponseSimple<ICountryCodivDTO>>> {
       
        let validation = validationResult(req);
        if (!validation.isEmpty()) {
            return res.status(400).json( <types.ResponseError> {
                errorMessage: validation.array.toString(),
                statusCode: 400
            });
        }
        try {
            var countriesCodiv = await this.countryCodivService.getCountryCodiv(req.params.countryName)
            return res.status(200).json(<types.ResponseSimple<ICountryCodivDTO>> {
                statusCode: 200,
                data: countriesCodiv,
                message: "Retrieve successfully the information"
            });   
        } catch(e) {
            return res.status(500).json( <types.ResponseError> {
                errorMessage: validation.array.toString(),
                statusCode: 500
            });    
        }
    }
    async getCountryCovidApi(
        req: Request, 
        res: Response<types.ResponseError | types.ResponseSimple<ICountryCodivDTO>>, 
        next: NextFunction
    ) : Promise<Response <types.ResponseError | types.ResponseSimple<ICountryCodivDTO>>> {
    
        try {
            var countriesCodiv = await this.countryCodivService.getCountryApi(req.params.countryName);
            return res.status(200).json(<types.ResponseSimple<ICountryCodivDTO>> {
                statusCode: 200,
                data: countriesCodiv,
                message: "Retrieve successfully the information from the Api"
            });
        } catch(e) {
            return res.status(500).json( <types.ResponseError> {
                errorMessage: e.message,
                statusCode: 500
            });  
        }
    }
    async getAvailableCountries(
        req: Request, 
        res: Response<types.ResponseError | types.ResponseList<ICountryCodivDTO>>, 
        next: NextFunction
        ) {
        try {
            const countries = await this.countryCodivService.getAllCountries();
            let allCountries = apiConfig.validCountries.map(country => {
                const countryModel = countries.find(item => item.name === country);
                const builderCountry = new ICountryCodivDTOBuilder();
                if(countryModel) {
                    builderCountry.setName(countryModel.name)
                                  .setConfirmed(countryModel.confirmed)
                                  .setDeaths(countryModel.deaths)
                                  .setRecovered(countryModel.recovered);
                } else {
                    builderCountry.setName(country);
                }
                return builderCountry.build();
            });
            return res.status(200).json(<types.ResponseList<ICountryCodivDTO>>{
                statusCode: 200,
                data: allCountries,
                numberResults: allCountries.length,
                message: "Retrieve successfully the information"
            });   
        } catch(e) {
            return res.status(500).json( <types.ResponseError> {
                errorMessage: e.message,
                statusCode: 500
            });      
        }
    };
}
