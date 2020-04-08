/**
 * @author Israel Yasis
 */
const mongoose = require('../config/database');

const schema = {
    name: String,
    city: String
};
const collectionName = "provinceCodiv";
const provinceCodivSchema = mongoose.Schema(schema);
const provinceCodiv = mongoose.model(collectionName, provinceCodivSchema);

module.exports = provinceCodiv;