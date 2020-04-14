import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../../src/App';
chai.use(chaiHttp);
const expect = chai.expect;

describe('baseRoute', () => {

 
  it('should responde an array.', () => {
    return chai.request(app).get('/codiv-countries/')
    .then(res => {
        expect(res.status).to.equal(200);
        expect(res).to.be.json;
        expect(res.body.data).to.be.an('array');
    });
  });
  it('should responde and 404 not found.', () => {
    return chai.request(app).get('/codiv-countries/peru/details')
    .then(res => {
        expect(res.status).to.equal(404);
    });
  });
  it('should responde an object dto.', () => {
    return chai.request(app).get('/codiv-countries/bolivia')
    .then(res => {
        expect(res.status).to.equal(200);
        expect(res).to.be.json;
        expect(res.body.data).to.include.all.keys(['name', 'confirmed', 'deaths', 'recovered']);
    });
  });
  it('should responde an 400 if the country is not allowed.', () => {
    return chai.request(app).get('/codiv-countries/japon')
    .then(res => {
        expect(res.status).to.equal(400);
    });
  });

});