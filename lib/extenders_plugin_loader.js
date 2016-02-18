var path = require('path');

exports.main = function(config,api,callback){
	var plugins = config.ex_plugins;
	var relpath = path.join(__dirname,'../ex-plugin',plugins[0].app_name+".js");
	var app = require(relpath);
	var appn = new app(api);
	callback(appn.main);
}