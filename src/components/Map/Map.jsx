import React from "react";
import "./_Map.scss";
import { MapContainer, TileLayer } from "react-leaflet";
import DraggableMarker from "./DraggableMarker.jsx";
import Store from "../../store/index.js";

const Map = () => {
  return (
    <div className='map-container'>
      <MapContainer
        center={[53.902284, 27.561831]}
        zoom={7}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png?api_key=ab46a637-81e8-4df5-9f58-48897cbf8160"
        />
        {Store.Location.coords.lat && <DraggableMarker />}
      </MapContainer>
    </div>
  );
}

export default Map;
