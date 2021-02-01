import React from "react";
import { makeAutoObservable } from "mobx";
import L from 'leaflet';
import { Marker, Tooltip } from 'react-leaflet';
import axios from 'axios';

class stateMap {
  constructor() {
    makeAutoObservable(this);
    this.markers = null;
  }

  createMarkerTooltip() {
    axios.post('http://localhost:8000/create-map-main', {}).then((data) => {
      const now = new Date();
      const events = data.data;

      function addZero(number) {
        if (number < 10) {
          number = "0" + number;
        }
        return number;
      }

      const createMarker = events.map((oneEvent) => {

        let classNameMarker;
        const dateOneStart = new Date(oneEvent.startDate);
        const dateOneEnd = new Date(oneEvent.endDate);

        if (dateOneStart < now && dateOneEnd < now) {
          classNameMarker = "color-red"
        } else if (dateOneStart <= now && now <= dateOneEnd) {
          classNameMarker = "color-yellow"
        } else if (dateOneStart > now && dateOneEnd > now) {
          classNameMarker = "color-green"
        }


        const nameMonth = ['января', 'февраля', 'марта', 'апреля', 'мая',
          'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

        const stateDayStart = dateOneStart.getDate();
        const stateMouthStart = dateOneStart.getMonth();
        const stateYearStart = dateOneStart.getFullYear();
        const stateHoursStart = dateOneStart.getHours();
        const stateMinutesStart = dateOneStart.getMinutes();

        const stateDayEnd = dateOneEnd.getDate();
        const stateMouthEnd = dateOneEnd.getMonth();
        const stateYearEnd = dateOneEnd.getFullYear();
        const stateHoursEnd = dateOneEnd.getHours();
        const stateMinutesEnd = dateOneEnd.getMinutes();
        const cord = [oneEvent.location.lat, oneEvent.location.lng];
        
        const markerCustom = L.divIcon({
          className: classNameMarker,
          shadowSize: [12, 12],
          iconSize: [18, 18]
        });

        return (
          <Marker position={cord} icon={markerCustom} key={oneEvent.id}>
            <Tooltip>
              <div className="popUpEvent-">
                <h3>{oneEvent.summary}</h3>
                <p> c {stateDayStart} {nameMonth[stateMouthStart]} {stateYearStart} {stateHoursStart}:{addZero(stateMinutesStart)}</p>
                <p> до {stateDayEnd} {nameMonth[stateMouthEnd]} {stateYearEnd}  {stateHoursEnd}:{addZero(stateMinutesEnd)} </p>
                <p> {oneEvent.description} </p>
              </div>
            </Tooltip>
          </Marker>
        );
      });

      this.markers = createMarker;
    });
  }
}

export default new stateMap()
