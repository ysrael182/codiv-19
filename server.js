const http = require('http');
const app = require('./src/app');
const port = process.env.PORT || 3100;
const server = http.createServer(app);

server.listen(port, () => {
    console.log("Server started successfully.")
});