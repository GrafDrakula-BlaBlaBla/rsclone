import React from "react";
import "./_Map.scss";
import { MapContainer, TileLayer } from "react-leaflet";
import stateCalendar from "../../store/locationStore";
import { observer } from "mobx-react-lite";
// import DraggableMarker from "./DraggableMarker.jsx";

const Map = observer(() => {
  return (
    <div className="map-contener">
      <MapContainer
        center={stateCalendar.coords}
        zoom={7}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png?api_key=ab46a637-81e8-4df5-9f58-48897cbf8160"
        />
        {/* <DraggableMarker /> */}
      </MapContainer>
    </div>
  );
});

export default Map;
