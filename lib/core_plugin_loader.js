var path = require('path');

exports.main = function(config,callback){
	var application_name = config.manifest;
	var app = require(path.join(__dirname,'../core-plugin',application_name));
	callback(app);
}