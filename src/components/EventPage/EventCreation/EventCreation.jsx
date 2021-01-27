import React from "react";
import styles from "./_EventCreation.module.scss";
import byCities from "../../../modules/data/by-cities";
import SelectCity from "./SelectCity/SelectCity";
import SelectArea from "./SelectArea/SelectArea";
import Coords from "./Coords/Coords";

import { Observer } from "mobx-react";

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
              <div className='wrapper-time'>
                <label for="eventTime">C </label>
                <input
                  id="eventTime"
                  type="time"
                  name="time"
                  onBlur={(event) => {
                    storeEvent.getEventTime(event.target.value);
                  }}
                  list
                  required
                />
                <input
                  type="date"
                  onBlur={(event) => {
                    storeEvent.getEventStartDate(event.target.value);
                  }}
                  required
                />
              </div>
              <div className='wrapper-time'>
              <label for="eventTime"> ПО </label>
              <input
                  id="timeEnd"
                  type="time"
                  name="timeEnd"
                  onBlur={(event) => {
                    storeEvent.getEventTimeEnd(event.target.value);
                  }}
                  list
                  required
                />
                <input
                  type="date"
                  onBlur={(event) => {
                    storeEvent.getEventEndDate(event.target.value);
                  }}
                  required
                />
              </div>
            </div>
          )}
        </Observer>
      </div>
      {/* Event Location */}
      <div className={styles.main_place}>
        <p className={styles.title + " font_l"}>Где</p>
        <div className={styles.right_section}>
          <SelectArea locationStore={locationStore} areas={byCities} />
          <SelectCity locationStore={locationStore} region={region} />
          <Coords locationStore={locationStore}></Coords>
        </div>
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
        <button className="green_btn" onClick={ storeEvent.createEvent } >Создать</button>
      </div>
    </div>
  );
};

export default EventCreation;
