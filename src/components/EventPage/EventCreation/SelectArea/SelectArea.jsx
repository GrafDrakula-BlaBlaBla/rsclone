import React from "react";
import { Observer } from "mobx-react";

const SelectArea = ({ locationStore, areas }) => {
  const defaultValue = "Минская обл.";

  const regions = areas.regions;

  const currentArea = (area) => {
    locationStore.selectCurrentArea(area);
  };

  const currentCoords = (regions, area) => {
    locationStore.getCoordsCurrentArea(regions, area);
  };

  const currentCityList = (areaName, array) => {
    locationStore.getCityList(areaName, array);
  };

  return (
    <Observer>
      {() => (
        <select
          defaultValue={defaultValue}
          onChange={(event) => {
            currentArea(event.target.value);
            currentCoords(regions, event.target.value);
            currentCityList(event.target.value, areas.regions);
          }}
        >
          {regions.map((elem) => (
            <option value={elem.name} key={elem.name}>
              {elem.name}
            </option>
          ))}
        </select>
      )}
    </Observer>
  );
};

export default SelectArea;
