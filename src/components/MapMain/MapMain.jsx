import React, { useEffect } from 'react';
import './_MapMain.scss';
import { MapContainer, TileLayer, ZoomControl  } from 'react-leaflet';
import Legend from './Legend';
// import stateMap from  '../../state/stateMap.jsx';
import { observer } from "mobx-react-lite";

const MapMain = observer (() => {

// useEffect(() => {
// stateMap.createMarkerTooltip();
//  }, [])

  return(
    <div className="map-contener">

      <MapContainer center={[53.902284, 27.561831]} zoom={7} zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png?api_key=ab46a637-81e8-4df5-9f58-48897cbf8160"
        />
       { /*stateMap.markers*/ }
        <Legend />
        <ZoomControl position="topright" />
      </MapContainer>
    </div>
  );
})

export default MapMain;
