var http = require('http');


function server(){
	console.log("this is server core");
}

function createEvent(event,callback){
	
}

server.prototype.api = {
	createEvent:createEvent,
	createRouter:createRouter
}

server.prototype.main = function(func){
	this.server = http.createServer(function(req,res){

	});
}

server.prototype.run = function(port){
	this.server.listen(port);
	console.log("Server is running on : " +port);
}

module.exports = server;