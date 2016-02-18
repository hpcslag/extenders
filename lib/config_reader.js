'use strict'
var fs = require('fs');
var path = require('path');


exports.readIndexConfig = function(dir_path){
	return new Promise(function(data,error){
		var config_file_path = path.join(dir_path,"ex_config.json");
		fs.readFile(config_file_path,function(err,doc){
			if(err){
				error(true);
			}else{
				var json_parsed = JSON.parse(doc);
				data(json_parsed);
			}
		});
	});
	
}