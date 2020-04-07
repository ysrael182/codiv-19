/**
 * @author Israel Yasis
 */
const countryCodiv = require("../model/country.covid");
const api = require("../config/api.codiv");
let unirest  = require('unirest');
module.exports = {
    getCountryCodiv: async function(query) {
        try {
            const countryCodivRegister = countryCodiv.findOne(query);
            if(!countryCodivRegister.length) {
                this.getCountryApi(query).then(response => {
                    if (response.error) {
                        throw new Error(response.error);
                    }
                    const data = response.body.data.covid19Stats;
                    if(data == null) {
                        throw new Error("No data found");
                    }
                    let deaths = 0, confirmed = 0, recover = 0;
                    data.forEach(element => {
                        deaths+=element.deaths;
                        confirmed+=element.confirmed;
                        recover+=element.recover;
                    });
                });
            }
            return countryCodivRegister;
        } catch(e) {
            throw Error("Error when getting the country with codiv-19");
        }
    },
    getCountryApi: async function(query) {
        return unirest.get(api.apiV1URL).headers({
            "x-rapidapi-host": api.apiHost,
            "x-rapidapi-key": api.apiKey
        }).query(query);
    }
};