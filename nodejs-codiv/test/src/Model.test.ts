import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import * as assert from "assert";
import { CountryCodivModel } from "../../src/model/CountryCodivModel";
chai.use(chaiHttp);
const expect = chai.expect;
describe('Testing Models', () => {
    it('should create a new country test.', (done) => {
        
        const country = new CountryCodivModel({ name: 'Test',  confirmed: 0, deaths: 0, recovered: 0, lastUpdate: Date.now()});
        country.save() 
            .then(() => {
                assert(!country.isNew); //if poke is country to db it is not new
                done();
            });
    });
    it('should remove a country.', (done) => {
        CountryCodivModel.findOneAndRemove({ name: 'Test' })
            .then(() => CountryCodivModel.findOne({ name: 'Test' }))
            .then((country) => {
                assert(country === null);
                done();
            });
    });
});