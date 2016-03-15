var http = require('http');
var estatico = require('./estatico');

// Nota: Por si se ejecuta este archivo sin `./serve`
global.wpath = global.wpath || process.cwd();

var servidor = http.createServer(estatico);

servidor.listen(process.env.PORT || 3001, function (){
  console.log('[*] Servidor estatico sirviendo %s en %d', global.wpath, this.address().port);
});