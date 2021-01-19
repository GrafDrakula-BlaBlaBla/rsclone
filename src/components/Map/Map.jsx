import React, {useEffect, useState, useRef, useCallback, useMemo} from 'react';
import './_Map.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import stateCalendar from '../../state/StateCoordinates.jsx';

export default function Map() {

  function DraggableMarker() {
    const [draggable, setDraggable] = useState(false)
    const [position, setPosition] = useState(stateCalendar.coords)

    const markerRef = useRef(null)

    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current
          if (marker != null) {
            setPosition(marker.getLatLng())
            console.log(marker.getLatLng());
          }
        },
      }),
      [],
    )
    const toggleDraggable = useCallback(() => {
      setDraggable((d) => !d)
    }, [])

    return (
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}>
        <Popup minWidth={90}>
          <span onClick={toggleDraggable}>
            {draggable
              ? 'Ператащите маркер'
              : 'Кликнете'}
          </span>
        </Popup>
      </Marker>
    )
  }


  return(
    <div className="map-contener">

      <MapContainer center={[53.902284, 27.561831]} zoom={7} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png?api_key=ab46a637-81e8-4df5-9f58-48897cbf8160"
        />
         <DraggableMarker />
        </MapContainer>
    </div>
  );
}
