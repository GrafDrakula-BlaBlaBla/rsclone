import React, { useState, useEffect } from 'react';
import './_MapMain.scss';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import dataMarker from './store/dataForMarkers';
import L  from 'leaflet';

export default function MapMain() {

const [markerEvents, onChangeMarker] = useState([]);

useEffect(() => {

  dataMarker.then( ( data ) => {

    const now = new Date();

    let createMarker =  data.map( ( oneEvent ) => {

      let classNameMarker;
      let dateOneStart =  oneEvent['start'].hasOwnProperty('dateTime') ? new Date(oneEvent['start']['dateTime']) : new Date(oneEvent['start']['date']);
      let dateOneEnd =  oneEvent['end'].hasOwnProperty('dateTime') ? new Date(oneEvent['end']['dateTime']) : new Date(oneEvent['end']['date']);

      if(dateOneStart < now && dateOneEnd < now){
        classNameMarker = "color-red"
      }else if (dateOneStart <=  now  && now <= dateOneEnd){
        classNameMarker = "color-blue"
      } else if( dateOneStart > now && dateOneEnd > now ) {
        classNameMarker = "color-yellow"
      }
      let cord = [oneEvent.Location[0]['Let'], oneEvent.Location[0]['Lon']];
      let markerCustom = L.divIcon({
        className: classNameMarker,
        shadowSize: [12, 12],
        iconSize: [10, 10] });
        return (
          <Marker position = { cord }  icon={ markerCustom } >

          </Marker>
        )
      })

      onChangeMarker(createMarker);

    } )


 }, [])



  return(
    <div className="map-contener">

      <MapContainer center={[53.902284, 27.561831]} zoom={7} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png?api_key=ab46a637-81e8-4df5-9f58-48897cbf8160"
        />
        { markerEvents }
      </MapContainer>
    </div>
  );
}
