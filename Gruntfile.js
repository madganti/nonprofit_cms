module.exports = function(grunt) {

  grunt.initConfig({ //An object literal in javascript - for one time use only
    webServer: { //property on the object
      rootFolder: "www", //properties
      port: 8000
    }

  });

  grunt.registerTask("webServer", "Start a web server", function() {//not executed here, only a declaration)

    var
      webServer = require("./web-server"),
      webServerConfig = grunt.config("webServer");
//grunt tasks run synchronously

this.async(); //telling grunt to run this asynchronously

//webServerConfig.port = port || webServerConfig.port;

webServer(webServerConfig, function() {
  grunt.log.writeln("web server listening on port: " + webServerConfig.port)
});
});

grunt.registerTask("default", ["webServer"]);

};
