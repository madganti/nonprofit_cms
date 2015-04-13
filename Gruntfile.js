module.exports = function(grunt) {

  grunt.initConfig({ //An object literal in javascript - for one time use only
    webServer: { //property on the object
      rootFolder: "www", //properties
      port: 8000
    }

  });

  grunt.registerTask("default", "start a web server", function() {//not executed here, only a declaration)
//grunt tasks run synchronously

    var
       http = require("http"),
       express = require("express"),
       app = express(),
       webServerConfig = grunt.config("webServer");

       /*javascript variables are declared in the beginning for something called hoisting
       it's becasue javascript has function scope, not block scope*/

    this.async(); //telling grunt to run this asynchronously

    app.use(express.static(webServerConfig.rootFolder));

    //express makes it easier to configure and use the Node's built in http module
    http.createServer(app).listen(webServerConfig.port, function()  { //Chain pattern
      // This is a callback function
      grunt
         .log
         //Non-blocking IO function. javascript is single threaded. "Promises" help us manage asynchronous processes as this one.
           .writeln("web server listening on port: " + webServerConfig.port);
    });

  });

};
