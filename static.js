var fs = require("fs");

function serveStaticAsset(request, response){
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
}

exports.serveStaticAsset=serveStaticAsset;