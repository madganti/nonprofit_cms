module.exports = function(webServerConfig, webServerCallback) {

       http = require("http"),
       express = require("express"),
       app = express(),

       /*javascript variables are declared in the beginning for something called hoisting
       it's becasue javascript has function scope, not block scope*/

    app.use(express.static(webServerConfig.rootFolder));

    //express makes it easier to configure and use the Node's built in http module
    http.createServer(app).listen(webServerConfig.port, webServerCallback);

};
