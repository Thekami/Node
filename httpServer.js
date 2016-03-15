	
	var http = require('http');
	var server = http.createServer(function (peticion, respuesta) {
		respuesta.end("Hola! Soy tu nuevo servidor HTTP");
	});

	server.listen(3000, function(){
		console.log("Tu servidor esta listo en "+ this.address().port);
	});