/**
 * @author Israel Yasis
 */
const express = require('express');
const routes = require('./routes');
const app = express();
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Allow', 'GET');
    next()
});
app.use("/", routes);
module.exports = app;