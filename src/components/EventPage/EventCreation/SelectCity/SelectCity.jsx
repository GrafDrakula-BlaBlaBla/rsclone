import React, { useRef, useState } from "react";
import { Observer } from "mobx-react";
import styles from "./_SelectCity.module.scss";

export default function SelectCity({ locationStore, region }) {
  const input = useRef(null);
  const cityListRef = useRef(null);
  const [inputState, setInputState] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [cities, setCities] = useState(region.cities);
  const [selectedCity, setSelectedCity] = useState("Минск");

  const currentCityList = locationStore.cityList;

  const filterCities = (event) => {
    setCities(
      region.cities.filter((city) => {
        return city.name
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      }),
    );
  };

  const selectCity = (cityName) => {
    setSelectedCity(cityName);
    input.current.value = cityName;
  };

  const inputBlur = (event) => {
    if (
      !event.target.classList.contains(styles["search-events-input"]) &&
      !event.target.classList.contains(styles["city-list"])
    ) {
      setInputState(false);
      document.removeEventListener("click", inputBlur);
    }
  };

  const cityListRender = () => {
    document.addEventListener("click", inputBlur);

    return (
      <ul ref={cityListRef} className={styles["city-list"]}>
        {currentCityList.map((elem) => {
          return (
            <li
              className={styles["list-item"]}
              key={elem.name}
              onClick={() => selectCity(elem.name)}
            >
              {elem.name}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <Observer>
      {() => (
        <div className={styles["select-city"]}>
          <input
            ref={input}
            className={styles["search-events-input"]}
            type="text"
            placeholder={selectedCity}
            onKeyUp={filterCities}
            onFocus={() => {
              setInputState(true);
            }}
          />
          {inputState && cityListRender()}
        </div>
      )}
    </Observer>
  );
}
