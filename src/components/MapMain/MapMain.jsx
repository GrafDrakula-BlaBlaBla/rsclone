import React, { useState, useEffect } from 'react';
import './_MapMain.scss';
import { MapContainer, TileLayer, Marker, Popup, Tooltip, ZoomControl  } from 'react-leaflet';
import dataMarker from './store/dataForMarkers';
import L  from 'leaflet';
import Legend from './Legend';

export default function MapMain() {

const [markerEvents, onChangeMarker] = useState([]);


useEffect(() => {

  dataMarker.then( ( data ) => {

    const now = new Date();
// добавление нуля
    function addZero( number ) {
      if(number < 10) {
        number = "0" + number
      }
      return number;
    }

    let createMarker =  data.map( ( oneEvent ) => {

      let classNameMarker;
      let dateOneStart =  oneEvent['start'].hasOwnProperty('dateTime') ? new Date(oneEvent['start']['dateTime']) : new Date(oneEvent['start']['date']);
      let dateOneEnd =  oneEvent['end'].hasOwnProperty('dateTime') ? new Date(oneEvent['end']['dateTime']) : new Date(oneEvent['end']['date']);

      if(dateOneStart < now && dateOneEnd < now){
        classNameMarker = "color-red"
      }else if (dateOneStart <=  now  && now <= dateOneEnd){
        classNameMarker = "color-yellow"
      } else if( dateOneStart > now && dateOneEnd > now ) {
        classNameMarker = "color-green"
      }
      // console.log(oneEvent.summary);

      const nameMonth = [ 'января', 'февраля', 'марта', 'апреля', 'мая',
      'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

      let stateDayStart = dateOneStart.getDate();
      let stateMouthStart = dateOneStart.getMonth();
      let stateYearStart = dateOneStart.getFullYear();
      let stateHoursStart = dateOneStart.getHours();
      let stateMinutesStart = dateOneStart.getMinutes();

      let stateDayEnd = dateOneEnd.getDate();
      let stateMouthEnd = dateOneEnd.getMonth();
      let stateYearEnd = dateOneEnd.getFullYear();
      let stateHoursEnd = dateOneEnd.getHours();
      let stateMinutesEnd = dateOneEnd.getMinutes();

      let cord = [oneEvent.Location[0]['Let'], oneEvent.Location[0]['Lon']];
      let markerCustom = L.divIcon({
        className: classNameMarker,
        shadowSize: [12, 12],
        iconSize: [20, 20 ] });
        return (
          <Marker position = { cord }  icon={ markerCustom } key={oneEvent.id}>
            <Tooltip >
               <div>
                <h3>{ oneEvent.summary }</h3>
                <p>{ stateDayStart } { nameMonth[stateMouthStart]} { stateYearStart } в { stateHoursStart }:{addZero( stateMinutesStart )} &#8212;</p>
                <p>{ stateDayEnd } { nameMonth[stateMouthEnd]} { stateYearEnd } в { stateHoursEnd }:{addZero(stateMinutesEnd)} </p>
               </div>

            </Tooltip>

          </Marker>
        )
      })

      onChangeMarker(createMarker);

    } )


 }, [])



  return(
    <div className="map-contener">

      <MapContainer center={[53.902284, 27.561831]} zoom={7} zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png?api_key=ab46a637-81e8-4df5-9f58-48897cbf8160"
        />
        { markerEvents }
        <Legend />
          <ZoomControl position="topright" />
      </MapContainer>
    </div>
  );
}
