/**
 * @author Israel Yasis
 */
const mongoose = require('../config/database');

const schema = {
    country: String,
    lastUpdate: {
        type: Date,
        default: Date.now
    },
    confirmed: Number,
    deaths: Number,
    recovered: Number,
    provinceList: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "provinceCodiv"
        }
    ],
    
};
const collectionName = "countryCodiv";
const countryCodivSchema = mongoose.Schema(schema);
const countryCodiv = mongoose.model(collectionName, countryCodivSchema);

exports.countryCodiv = countryCodiv;
exports.schemaCountryCodiv = schema;
/**
  * Attaches a field to the multipart-form request, with pre-processing.
  * @param  {String} countryName
  * @param  {Number} confirmed
  * @param  {Number} deaths
  * @param  {Number} recover 
  * @return {Object}
  */
function getModelCountryCodiv(countryName, confirmed, deaths, recovered) {
    return {
        country: countryName,
        confirmed: confirmed,
        deaths: deaths,
        recovered: recovered,
        lastUpdate: Date.now()
    };
};
exports.getModelCountryCodiv = getModelCountryCodiv;