var http = require("http");
var fs = require("fs");

http.createServer(function(request,response){
	var requestUrl=request.url.substr(1);
	if(requestUrl==="")
		{
			requestUrl="index.html";
		}

	fs.readFile(requestUrl,(error,data)=>{		
		if(error){
			console.log("Error: file not found "+error);
			response.statusCode=404;
			response.end();
			return;
		}
		response.end(data);
	});

	return;
}).listen(3000,"127.0.0.1",()=>{
	console.log("Server is listening on localhost port 3000.");
});