import React, { useRef, useMemo } from "react";
import { Marker, Popup } from "react-leaflet";
import { observer } from "mobx-react-lite";
import Store from "../../store/index.js";

const DraggableMarker = observer(() => {
  const markerRef = useRef(null);

  const eventHandlers = useMemo(() => ({
    dragend() {
      const marker = markerRef.current;
      if (marker != null) {
        Store.Location.draggableMarker(marker.getLatLng());
      }
    },
  }), []);

  return (
    <Marker
      draggable="true"
      eventHandlers={eventHandlers}
      position={ [Store.Location.coords.lat, Store.Location.coords.lng] }
      ref={ markerRef }
    >
      <Popup minWidth={90}>
        <h3>Установите маркер в месте проведения мероприятия</h3>
      </Popup>
    </Marker>
  );
});

export default DraggableMarker;
