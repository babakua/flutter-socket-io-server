
const {uuid}=require('uuid');
class Bands{

    constructor(){
        this.bans=[];
    }

    addBand( band = new Bands()){
            this.bands.push(band);
    }

    getBands(){
        return this.bands;
    }

    deleteBand(id=''){
        this.bans= this.bands.filter( band=> band.id!==id);
        return this.bands;
    }

    voteBand(id){
        this.bands = this.bands.map(band =>{
            if(band.id==id){
                band.votes++;
                return band;
            }
            else{
                return band;

            }

        });
    }

}
  
modulo.exports=Bands;