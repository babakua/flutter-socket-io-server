
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
        io.emit('mensaje',{admin:'Nuevo mensaje'});
    });

    //Desde un cliente envia un mensaje a todos los clientes
    //e server lo escucha y lo envia a todo los clientes
   client.on('emitir-mensaje',(payload)=>{
      //console.clear;
       io.emit('nuevo-mensaje','HOLAAAA');
   })

  });
