var http = require("http");

var manejador = function(solicitud, respuesta) {
	console.log('Hola Mundo!');
	// console.log(solicitud);
	// console.log(respuesta);
	respuesta.end();
};

var server = http.createServer(manejador);

server.listen(8080);