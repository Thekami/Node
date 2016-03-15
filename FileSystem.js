var fs = require('fs');

// // Con especificación de codificación al incio
// fs.readFile('./eventos.js', 'utf8', function (error, archivo) {
// 	//En ambos imprimira el archivo correctamente
// 	console.log(archivo)
// 	console.log(archivo.toString())
// })

// // Sin especificacón de codificación al inicio
// fs.readFile('./eventos.js', function (error, archivo) {
// 	//Imprimirá valores hexadecimales
// 	console.log(archivo)
// 	//Imprimirá el archivo correctamente
// 	console.log(archivo.toString())
// })

//Trae las estadisiticas del archivo
// fs.stat('./eventos.js', function(error, stat){
// 	//Opcciones de informacion a visalizar
// 	console.log(stat)
// 	console.log(stat.isDirectory())
// 	console.log(stat.isFile())
// 	console.log(stat.atime)
// })


var stream = fs.createReadStream('./eventos.js')

stream.on('error', console.log)

stream.on('data', function(chunk){
	console.log(chunk)
})

//manda la informacion del stream directo a la consola
stream.pipe(process.stdout)

stream.on('end', function(){
	console.log("La lectura termino")
})