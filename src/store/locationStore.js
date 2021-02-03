/* eslint-disable array-callback-return */
import { action, makeObservable, observable } from "mobx";

export default class Location {
  region = "Минская обл.";
  currentCity = "";
  cityList = [];
  coords = { lat: 53.908665, lng: 27.570293 };

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
    array.forEach((el) => {
      if (areaName === el.name) {
        this.currentCity = el.defaultCity.name;
        this.cityList = el.cities;
      }
    });
  };

  getCoordsCurrentArea = (arrayRegions, currentAreaName) => {
    arrayRegions.forEach((el) => {
      if (el.name === currentAreaName) {
        this.coords.lat = el.lat + Math.random() / 100;
        this.coords.lng = el.lng + Math.random() / 100;
      }
    });
  };

  createEventLocation = () => {};

  draggableMarker = (latLng) => {
    this.coords = latLng;
  };
}
