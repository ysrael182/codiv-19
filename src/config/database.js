/**
 * @author Israel Yasis
 */
const mongoose  = require('mongoose');
const dbName = 'codiv';
const dbPath = 'mongodb://localhost:27017/'+ dbName;

mongoose.connect(dbPath, {
  useNewUrlParser: true
});
const db = mongoose.connection;
db.on("error", () => {
    console.log("> error occurred from the database");
});
db.once("open", () => {
    console.log("> successfully opened the database");
});
module.exports = mongoose;