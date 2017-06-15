var http = require("http");
var fs = require("fs");

// sincrono
// var html = fs.readFileSync("./index.html");

// http.createServer(function(req, res){
// 	res.write(html);
// 	res.end();

// }).listen(8080);


// asincrono

http.createServer(function(req, res){
	
	fs.readFile("./index.html", function(err, html){
		res.writeHead(200,{"Content-Type": "text/html"});
		res.write(JSON.stringify({nombre: "Angel", username: "thekami"}));
		res.write(html);
		res.end();
	});


}).listen(8080);



	