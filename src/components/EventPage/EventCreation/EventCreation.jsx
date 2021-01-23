import React from "react";
import styles from "./_EventCreation.module.scss";
import byCities from "../../../modules/data/by-cities";
import SelectCity from "./SelectCity/SelectCity";
import SelectArea from "./SelectArea/SelectArea";
import Coords from "./Coords/Coords";

import { Observer } from "mobx-react-lite";

const EventCreation = ({ storeEvent, locationStore }) => {
  const region = byCities.regions.find(
    (elem) => elem.name === locationStore.region,
  );

  return (
    <div className={styles.container}>
      {/* Event Title */}
      <div className={styles.name}>
        <div className={styles.name_top}>
          <p className={styles.title + " font_l"}>Название</p>
          <Observer>
            {() => (
              <input
                onBlur={(event) => storeEvent.getEventTitle(event.target.value)}
                type="text"
                placeholder="Введите название ивента"
              />
            )}
          </Observer>
        </div>
        <p className={styles.name_description}>
          Название будет отображаться в списке всех мероприятий
        </p>
      </div>
      {/* Event Date */}
      <div className={styles.main_date}>
        <p className={styles.title + " font_l"}>Когда</p>
        <Observer>
          {() => (
            <div className={styles["right-section"]}>
              <input
                onChange={(event) => {
                  storeEvent.getEventStartDate(event.target.value);
                }}
                type="date"
              />
              <p>-</p>
              <input
                onChange={(event) => {
                  storeEvent.getEventEndDate(event.target.value);
                }}
                type="date"
              />
            </div>
          )}
        </Observer>
      </div>
      {/* Event Location */}
      <div className={styles.main_place}>
        <p className={styles.title + " font_l"}>Где</p>
        <Observer>
          {() => (
            <div className={styles.right_section}>
              <SelectArea locationStore={locationStore} cites={byCities} />

              <SelectCity region={region} />

              <Coords locationStore={locationStore}></Coords>
            </div>
          )}
        </Observer>
      </div>

      <p className={styles.place_description}>
        Укажите точное место проведения мероприятия на карте
      </p>
      {/* Event goal */}
      <div className={styles.main_goals}>
        <p className={styles.title + " font_l"}>Цели</p>
        <div className={styles["textarea-wrapper"]}>
          <Observer>
            {() => (
              <textarea
                onBlur={(event) => storeEvent.getEventGoal(event.target.value)}
                maxLength="200"
                placeholder="Раскажите, как ваш проект поможет защитить экологию"
              />
            )}
          </Observer>
        </div>
      </div>
      {/* Event description */}
      <div className={styles.main_task}>
        <p className={styles["title"]}>Задача</p>
        <div className={styles["textarea-wrapper"]}>
          <Observer>
            {() => (
              <textarea
                onBlur={(event) =>
                  storeEvent.getEventDescription(event.target.value)
                }
                maxLength="200"
                placeholder="Что будете делать"
              />
            )}
          </Observer>
        </div>
      </div>

      <div className={styles.bottom}>
        <button className="green_btn">Создать</button>
      </div>
    </div>
  );
};

export default EventCreation;
