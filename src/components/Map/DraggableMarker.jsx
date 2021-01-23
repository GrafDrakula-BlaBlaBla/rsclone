import React, { useState, useRef, useCallback, useMemo } from "react";
import "./_Map.scss";
import { Marker, Popup } from "react-leaflet";
import stateCalendar from "../../store/locationStore";
import { observer } from "mobx-react-lite";

const DraggableMarker = observer(() => {
  const markerRef = useRef(null);

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          stateCalendar.draggableMarker(marker.getLatLng());
        }
      },
    }),
    [],
  );
  return (
    <Marker
      draggable="true"
      eventHandlers={eventHandlers}
      position={[stateCalendar.coords.lat, stateCalendar.coords.lng]}
      ref={markerRef}
    >
      <Popup minWidth={90}>
        <h3>Установите маркер в месте проведения мероприятия</h3>
      </Popup>
    </Marker>
  );
});

// export default DraggableMarker;
