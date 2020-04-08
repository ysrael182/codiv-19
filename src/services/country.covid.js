/**
 * @author Israel Yasis
 */
const countryCodivMongoose= require("../model/country.covid");
const countryCodivModel = countryCodivMongoose.countryCodiv;
const api = require("../config/api.codiv");
let unirest  = require('unirest');
/**
 * 
 * @param {Object} query 
 */
async function getCountryCodiv(query) {
    
    const countryCodiv = await countryCodivModel.findOne(query).exec();
    if(countryCodiv == null || (countryCodiv.lastUpdate - Date.now () < api.apiRefresh)) {
        const informationCodiv = await getCountryApi(query);
        if(countryCodiv == null) {
            countryCodiv = new countryCodivModel(informationCodiv).save(function (error) {
                if (error) {
                    throw new Error("Error creating a new register of codiv.");
                }
            }); 
        } else {
            countryCodiv.update(informationCodiv, function(error){
                if (error) {
                    throw new Error("Error updatingcodiv.");
                }
            });    
        }    
    }
    return countryCodivRegister;
}
exports.getCountryCodiv = getCountryCodiv;
/**
 * 
 * @param {Object} query
 * @return {Object}
 * @throws {Error}
 */
async function getCountryApi(query) {
    return unirest.get(api.apiV1URL).headers({
        "x-rapidapi-host": api.apiHost,
        "x-rapidapi-key": api.apiKey
    }).query(query).then(response => {
        if (response.error) {
            throw new Error(response.error);
        }
        const data = response.body.data.covid19Stats;
        if(data == null) {
           throw new Error("No data found");
        }
        let deaths = 0, confirmed = 0, recovered = 0;
        data.forEach(element => {
            deaths += element.deaths;
            confirmed += element.confirmed;
            recovered += element.recovered;
        });
        return countryCodivMongoose.getModelCountryCodiv(query.country, confirmed, deaths, recovered);
    });
};
exports.getCountryApi = getCountryApi;