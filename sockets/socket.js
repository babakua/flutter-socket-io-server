
const {io}= require('../index');

const Bands = require('../models/bands');
const Band = require('../models/band');

const bands= new Bands();

bands.addBand( new Band('American Air Line'));
bands.addBand( new Band('COPA'));
bands.addBand( new Band('JET BLUE'));
bands.addBand( new Band('Air EUROPA'));
console.log(bands);

console.log('Inicializando el server');

//El client es una conexion de un dispositivo
io.on('connection', client => {
    console.log('Cliente conectado');
    client.emit('active-bands', bands.getBands());


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
       console.log(payload);

     // console.clear
      //Lo envia para todo el mundo pero no le llega al cliente remitente y no se puede
      //leer el payload como un json ya que viene con un string
    //  client.broadcast.emit('nuevo-mensaje','Mensaje enviando desde algún cliente:'+payload)
   
    //solamente pasando el payload podemos manejar el JSON
    client.broadcast.emit('nuevo-mensaje',payload) ;
      //io.emit('nuevo-mensaje',payload)//Emite a todos
       

  });

  client.on ('vote-band',(payload)=>{
      console.log(payload);
      bands.voteBand(payload.id);
      io.emit('active-bands',bands.getBands());

  });

  
  client.on ('add-band',(payload)=>{
    console.log(payload);
    const newBand = new Band(payload.name);
    bands.addBand(newBand);
     
    io.emit('active-bands',bands.getBands());

});

client.on ('delete-band',(payload)=>{
  console.log(payload);
  const id = new Band(payload.id);
  bands.deleteBand(id);
   
 // io.emit('active-bands',bands.getBands());

});



});

