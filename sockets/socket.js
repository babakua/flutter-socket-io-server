
const {io}= require('../index');

//El client es una conexion de un dispositivo
io.on('connection', client => {
    console.log('Cliente conectado');

    client.on('disconnect', () => {
            console.log('Cliente desconectado');
    });

    client.on('mensaje',(payload)=>{
        console.log('mensaje:', payload);

        //Envia un mensaje a todos los clientes
        io.emit('mensaje',{admin:'El server indica que alguien se conecto !!'});
    });

    //Desde un cliente envia un mensaje a todos los clientes
    //e server lo escucha y lo envia a todo los clientes
   client.on('emitir-mensaje',(payload)=>{
     // console.clear
      //Lo envia para todo el mundo pero no le llega al cliente remitente
      client.broadcast.emit('nuevo-mensaje','Mensaje enviando desde algún cliente:'+payload) 
      //io.emit('nuevo-mensaje',payload)//Emite a todos
       

  })

});

