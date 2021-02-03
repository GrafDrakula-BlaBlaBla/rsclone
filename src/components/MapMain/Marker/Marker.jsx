import React from "react";
import styles from './_Marker.module.scss';
import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';

export default function Markers({ event }) {
  function addZero(number) {
    if (number < 10) {
      number = "0" + number;
    }
    return number;
  }

  const date = new Date();

  let classNameMarker;
  const dateOneStart = new Date(event.startDate);
  const dateOneEnd = new Date(event.endDate);

  if (dateOneEnd < date) {
    classNameMarker = styles.color_red;
  } else if (dateOneStart <= date && date <= dateOneEnd) {
    classNameMarker = styles.color_yellow;
  } else if (dateOneStart > date) {
    classNameMarker = styles.color_green;
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
  const cord = [event.location.lat, event.location.lng];

  const markerCustom = L.divIcon({
    className: classNameMarker,
    shadowSize: [12, 12],
    iconSize: [18, 18]
  });
console.log(event);
  return (
    <Marker position={cord} icon={markerCustom} className="marker-style">
      <Popup>
        <div>
          <h3>{event.eventTitle}</h3>
          <div><p> {event.description} </p></div>
          <p> c {stateDayStart} {nameMonth[stateMouthStart]} {stateYearStart} {stateHoursStart}:{addZero(stateMinutesStart)} по {stateDayEnd} {nameMonth[stateMouthEnd]} {stateYearEnd}  {stateHoursEnd}:{addZero(stateMinutesEnd)} </p>
        </div>
      </Popup>
    </Marker>
  );
}
