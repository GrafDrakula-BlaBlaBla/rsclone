import React from 'react';
import './_Map.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function Map() {
  const position = [53, 28];
  const zoom = 2
  return(
    <div className="map-contener">
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      </MapContainer>
    </div>
  );
}
