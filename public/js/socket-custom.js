var socket = io();
        
socket.on('connect', function(){
    console.log('Conectado al servidor');
});

// Escuchar sucesos
socket.on('disconnect', function() {
    console.log('Conexion con el servidor perdido');
    
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Saul',
    mensaje: 'Hola servidor'
}, function(resp){
    console.log('Respuesta del servidor:', resp);
});

socket.on('enviarMensaje', function(mensaje){
    console.log(mensaje);
    
})