//import required modules

var http = require('http');
const express = require('express');
const app = express()

app.get('/',function(request,response){
	response.sendFile('views/index.html');
	// response.send('Hello world ##############');
});

app.listen(process.env.PORT||8099,function(){
	console.log("app listening on the port 8099");
});

// //create a server instance and binding at port 8081
// http.createServer(function(request,response){
// 	//send the http header
// 	//Http status:200 OK
// 	//Content Type : text/plain
// 	response.writeHead(200,{'Content-Type':'text/plain'});

// 	//send the response body
// 	response.end('Server running successfully');
	
// }).listen(process.env.PORT || 8099);

// console.log("server running at localhost:8099");

