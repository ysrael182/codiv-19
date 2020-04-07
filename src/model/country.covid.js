/**
 * @author Israel Yasis
 */
const mongoose = require('../config/database');

const schema = {
    country: String,
    lastUpdate: Date,
    confirmed: Number,
    deaths: Number,
    recover: Number,
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

module.exports = countryCodiv;