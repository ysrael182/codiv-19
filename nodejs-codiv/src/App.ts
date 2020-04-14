import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import { connectDatabase } from "./config/DatabaseCodiv";
import  * as routerCountryCodiv from "./routes/CountryCodivRouter";
/**
 * @author Israel Yasis
 */

class App {

  public express: express.Application;
  constructor() {
    this.express = express();
    this.setMongoConfig();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }
  private setMongoConfig() {
    connectDatabase();
  }

  private routes(): void {
    this.express.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Allow', 'GET');
        next()
    });
    this.express.use("/codiv-countries", routerCountryCodiv.router);
  }

}
export default new App().express;