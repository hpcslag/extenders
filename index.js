'use strict'
//node-module loading
var path = require('path');
var colors = require('colors');

//system configure
var process_dir = path.join(__dirname,'./test/'); //fake path



//lib module loading
var config_reader = require('./lib/config_reader.js');
var core_plugin_loader = require('./lib/core_plugin_loader.js');
var ex_plugin_loader = require('./lib/extenders_plugin_loader.js');

//first read config
config_reader.readIndexConfig(process_dir).then(function(config){
	console.log("loading your application...".yellow);
	var manifest = "manifest name: " + config.manifest;
	console.log(manifest.green);
	console.log("loading your application ex_plugins...".yellow);
	for (var i = 0; i < config.ex_plugins.length; i++) {
		var app = "load : " + config.ex_plugins[i].app_name;
		console.log(app.green);
	};

	//loading core application
	load_core(config);

}).then(function(error){
	if(error){
		console.log("Can't read your configure files.".red);
		process.exit();
	}
});

function load_core(config){
	core_plugin_loader.main(config,function(application){
		var app = new application();
		load_ex_plugin(config,app.api,function(plugin){
			app.main(plugin);
		});
		app.run();
	});
}

function load_ex_plugin(config,api,cb){
	ex_plugin_loader.main(config,api,function(plugin){
		cb(plugin);
	});
}

function process_applicaton(){

}
//check folder exists