import { action, makeObservable, observable } from "mobx";

export default class Location {
  region = "Минская обл.";
  currentCity = "";
  cityList = [];
  coords = {};

  constructor() {
    makeObservable(this, {
      region: observable,
      currentCity: observable,
      cityList: observable,
      coords: observable,
      selectCurrentArea: action,
      getCityList: action,
      getCoordsCurrentArea: action,
      createEventLocation: action,
    });
  }

  selectCurrentArea = (currentAreaName) => {
    this.region = currentAreaName;
  };

  getCityList = (areaName, array) => {
    array.map((el) => {
      if (areaName === el.name) {
        this.currentCity = el.defaultCity.name;
        this.cityList = el.cities;
      }
    });
  };

  getCoordsCurrentArea = (arrayRegions, currentAreaName) => {
    arrayRegions.forEach((el) => {
      if (el.name === currentAreaName) {
        this.coords.lat = el.lat;
        this.coords.lng = el.lng;
      }
    });
  };

  createEventLocation = () => {};

  draggableMarker = (latLng) => {
    console.log(latLng);
    this.coords = latLng;
  };
}
