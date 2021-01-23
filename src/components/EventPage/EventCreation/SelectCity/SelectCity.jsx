import React, { useRef, useState } from "react";
import styles from "./_SelectCity.module.scss";

export default function SelectCity({ region }) {
  const input = useRef(null);
  const cityListRef = useRef(null);
  const [inputState, setInputState] = useState(false);
  const [cities, setCities] = useState(region.cities);
  const [selectedCity, setSelectedCity] = useState("Минск");

  function selectCity(cityName) {
    setSelectedCity(cityName);
    input.current.value = cityName;
  }

  function inputBlur(event) {
    if (
      !event.target.classList.contains(styles["search-events-input"]) &&
      !event.target.classList.contains(styles["city-list"])
    ) {
      setInputState(false);
      document.removeEventListener("click", inputBlur);
    }
  }

  function filterCities(event) {
    setCities(
      region.cities.filter((city) => {
        return city.name
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      }),
    );
  }

  function cityListRender() {
    document.addEventListener("click", inputBlur);

    return (
      <ul ref={cityListRef} className={styles["city-list"]}>
        {cities.map((elem) => {
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
  }

  return (
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
  );
}
