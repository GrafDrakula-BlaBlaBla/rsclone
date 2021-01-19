import { makeAutoObservable } from "mobx"
import byCities from '../modules/data/by-cities';

class StateCoordinates {

  coords = { lat: 53.902284,
            lng: 27.561831 }
  region = 'Минская обл.';
  changeSelectRegion = this.selectRegion.bind(this);


   constructor() {
       makeAutoObservable(this)
   }

   changeCoordsSelectedRegion(){
     for (var i = 0; i < byCities[0].regions.length; i++) {
       if(this.region === byCities[0].regions[i].name){
         this.coords.lat = byCities[0].regions[i].lat;
         this.coords.lng = byCities[0].regions[i].lng;
         }
       }
     }

   selectRegion(event){
     this.region = event.target.value;
     this.changeCoordsSelectedRegion();
     }

   draggableMarker(latLng){
     this.coords = latLng;
   }

}

export default new StateCoordinates()
