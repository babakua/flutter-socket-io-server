
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
    })
  });
