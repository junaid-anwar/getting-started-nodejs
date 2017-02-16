var express = require('express');
var favicon = require('serve-favicon');
var app=express();

app.use(favicon(__dirname + '/favicon.ico'));

app.get("/", (request,response)=>{
	response.end('Hello Junaid!!!');
});

app.get("/mona", (request,response)=>{
	response.end('mona');
});

app.listen(3000,"127.0.0.1",()=>{
	console.log("Server is listening on localhost port 3000.");
});