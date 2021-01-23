import { action, makeObservable, observable } from "mobx";
import byCities from "../modules/data/by-cities.json";

export default class Location {
  region = "Минская обл.";
  city = "";
  coords = { lat: 53.902284, lng: 27.561831 };

  constructor() {
    makeObservable(this, {
      region: observable,
      city: observable,
      coords: observable,
      changeSelectRegion: action,
    });
  }

  changeSelectRegion = () => {};

  changeCoordsSelectedRegion = () => {
    for (var i = 0; i < byCities.regions.length; i++) {
      if (this.region === byCities.regions[i].name) {
        this.coords.lat = byCities.regions[i].lat;
        this.coords.lng = byCities.regions[i].lng;
      }
    }
  };

  selectRegion = (event) => {
    this.region = event.target.value;
    this.changeCoordsSelectedRegion();
  };

  draggableMarker = (latLng) => {
    this.coords = latLng;
  };
}
