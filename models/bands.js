const Band= require('./band');
class Bands{

    constructor(){
        this.bans=[];
    }

    addBand( band = new Band()){
           // this.bands.push(band);
         //  this.bands.push(band);
    }

    getBands(){
        return this.bands;
    }

    deleteBand(id = ''){
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
  
module.exports=Bands;