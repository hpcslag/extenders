module.exports = function(server){
	server.createEvent("client",function(request,response){
		response.writeHead(200,{"Content-Type":"text/html"});
		response.end("File-Viewer Plugin is loading!");
	});
}