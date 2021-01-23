import React from "react";
import styles from ".././_EventCreation.module.scss";

const Coords = ({ locationStore }) => {
  return (
    <div className={styles.coordinates}>
      <p>
        lon: <span> {locationStore.coords.lat.toFixed(6)} </span>
      </p>
      <p>
        lat: <span> {locationStore.coords.lng.toFixed(6)}</span>
      </p>
    </div>
  );
};

export default Coords;
