	
//con un salto de linea
//var str = new Buffer('Hola\nsoy un buffer', 'utf8');

//sin salto de linea
var str = new Buffer('Hola soy un buffer', 'utf8');

console.log(str);
console.log(str.toString('utf8'));
console.log(str.toString('base64'));