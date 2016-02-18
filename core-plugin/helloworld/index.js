function helloworld(){}

helloworld.prototype.main = function(plugin){
	this.run = function(){
		show("Hello world is running");
		plugin("requestss","response"); //res,req in here	
	}
}

helloworld.prototype.api = {
	show:show
}

function show(str){
	console.log(str);
}

module.exports = helloworld;