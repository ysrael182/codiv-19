/**
 * @author Israel Yasis
 */
const countryCodivService = require("../services/country.covid");
class CountryCodiv {
    getCountryCodiv(req, res, next) {
        return res.status(200).json({"response": "ok"});
    }
    getCountriesCodivn(req, res, next) {
        return res.status(200).json({"response": "OK"})
    }
}
export default CountryCodiv;