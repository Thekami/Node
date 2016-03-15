	
	var eventos = require('events');

	var EmisorEventos = eventos.EventEmitter;

	var Evento = new EmisorEventos();

	// Evento.on() = Evento.addEventListener()
	// Evento.off() = Evento.removeEventListener()
	// Evento.emit() = $jQuery.trigger()

	// Evento.on() -> Defino el evento con un callback para menejar la informacion obtenida
	Evento.on('data', function (data) {
		console.log(data);
	})

	// Evento.emit() -> Invoca un evento definido antertiormente
	setInterval(function(){
		Evento.emit('data', Date.now())
	}, 1000)

