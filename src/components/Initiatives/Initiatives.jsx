import React from 'react';
import Calendar from './../Calendar/Calendar';
import Map from './../Map/Map';
import './_Initiatives.scss';

export default function Initiatives() {

  return(
    <div className="wrapper-page-ivitiatives">
      <Map/ >
      <Calendar/ >
    </div>
  );
}
