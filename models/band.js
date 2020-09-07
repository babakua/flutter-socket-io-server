
const {uuid}=require('uuid');
class Band {
    constructor (name='no-name'){
        this.id= uuid();// identificador unico
        this.name= name;
        this.votes=0;
    }
}

modulo.exports=Band;