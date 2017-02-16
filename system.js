var http = require("http");
var static = require('./static.js');


http.createServer(function(request,response){
	static.serveStaticAsset(request,response);	

	return;
}).listen(3000,"127.0.0.1",()=>{
	console.log("Server is listening on localhost port 3000.");
});