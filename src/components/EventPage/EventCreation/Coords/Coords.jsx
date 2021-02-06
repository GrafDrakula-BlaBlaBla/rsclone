import React from "react";
import { Observer } from "mobx-react";
import { runInAction } from "mobx";

import styles from "../_EventCreation.module.scss";

const Coords = ({ locationStore }) => {

  runInAction(() => {
    locationStore.coords.lat = locationStore.coords.lat ?? 53.902284 + Math.random()/100;
    locationStore.coords.lng = locationStore.coords.lng ?? 27.561831 + Math.random()/100;
  });

  return (
    <Observer>
      {() => (
        <div className={styles.coordinates}>
          <p>
            lon: <span> {locationStore.coords.lat.toFixed(6)} </span>
          </p>
          <p>
            lat: <span> {locationStore.coords.lng.toFixed(6)}</span>
          </p>
        </div>
      )}
    </Observer>
  );
};

export default Coords;
