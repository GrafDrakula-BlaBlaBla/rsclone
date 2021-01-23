import React from "react";

const SelectArea = ({ locationStore, cites }) => {
  return (
    <select
      defaultValue="Минская обл."
      onChange={locationStore.changeSelectRegion}
    >
      {cites.regions.map((elem) => (
        <option value={elem.name} key={elem.name}>
          {elem.name}
        </option>
      ))}
    </select>
  );
};

export default SelectArea;
