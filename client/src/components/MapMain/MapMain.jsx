import React, { useEffect, useState } from 'react';
import './_MapMain.scss';
import { MapContainer, TileLayer, ZoomControl  } from 'react-leaflet';
import Legend from './Legend';
import Marker from './Marker/Marker';
import axios from 'axios';

export default function MapMain() {
  const [markers, setMarkers] = useState([]);


  useEffect(() => {
    axios.post('/create-map-main', {}).then((data) => {
      setMarkers(data.data.map((event, id) => <Marker event={event} key={id}/>));
    });
  }, []);

  return(
    <div className="map-contener">

      <MapContainer center={[53.902284, 27.561831]} zoom={7} zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png?api_key=ab46a637-81e8-4df5-9f58-48897cbf8160"
        />
        { markers }
        <Legend />
        <ZoomControl position="topright" />
      </MapContainer>
    </div>
  );
}
