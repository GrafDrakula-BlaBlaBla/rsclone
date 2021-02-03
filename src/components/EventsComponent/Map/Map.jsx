import React from "react";
import styles from "./_Map.module.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map({ eventTitle, position }) {

  const marker =
    <Marker
      position={ [position.lat, position.lng] }
    >
      <Popup className={ styles.marker_popup }>
        <p>{ eventTitle }</p>
      </Popup>
    </Marker>

  return (
    <div className={ styles.wrapper }>
      <MapContainer
       className={ styles.container }
        center={[53.902284, 27.561831]}
        zoom={7}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png?api_key=ab46a637-81e8-4df5-9f58-48897cbf8160"
        />
        { position.lat && marker }
      </MapContainer>
    </div>
  );
}
