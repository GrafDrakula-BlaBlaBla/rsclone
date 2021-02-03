import React, { useRef, useEffect, useState } from 'react';
import SectionWrapper from "../../../SectionWrapper/SectionWrapper";
import styles from './_EditSection.module.scss';
import SelectCity from "./SelectCity/SelectCity";
import byCities from "../../../../modules/data/by-cities";
import { Redirect } from 'react-router';

export default function EditSection({ eventData }) {
  const titleInput = useRef();
  const startTimeInput = useRef();
  const startDateInput = useRef();
  const endTimeInput = useRef();
  const endDateInput = useRef();
  const goalTextarea = useRef();
  const taskTextarea = useRef();

  const [location, setLocation] = useState({lng: null, lat: null});

  useEffect(() => {
    function addZero(number) {
      return number < 10 ? '0' + number : number;
    }

    titleInput.current.value = eventData.title;

    const startDate = new Date(eventData.startDate);
    startTimeInput.current.value = `${startDate.getHours()}:${startDate.getMinutes()}`;
    startDateInput.current.value = `${startDate.getFullYear()}-${addZero(startDate.getMonth())}-${addZero(startDate.getDate())}`;

    const endDate = new Date(eventData.endDate);
    endTimeInput.current.value = `${endDate.getHours()}:${endDate.getMinutes()}`;
    endDateInput.current.value = `${endDate.getFullYear()}-${addZero(endDate.getMonth())}-${addZero(endDate.getDate())}`;
  
    setLocation(eventData.location);

    goalTextarea.current.value = eventData.goal;
    taskTextarea.current.value = eventData.description;
  }, [eventData]);

  return (
    <SectionWrapper>
      <div className={ styles.container }>
        <div className={styles.name}>
          <div className={styles.name_top}>
            <p className={styles.title + " font_l"}>Название</p>
            <input
              type="text"
              placeholder="Введите название мероприятия"
              ref={ titleInput }
            />
          </div>
          {/* <span className={styles.warning_event}>{ storeEvent.warningEventTitle }</span> */}
          <p className={styles.name_description}>
            Название будет отображаться в списке всех мероприятий
          </p>
        </div>

        <div className={styles.main_date}>
        <p className={styles.title + " font_l"}>Когда</p>
          <div className={styles["right-section"]}>
            <div className='wrapper-time'>
              <label for="eventTime">C </label>
                <input ref={ startTimeInput } id="eventTime" type="time" name="time" list required />
                <input ref={ startDateInput } type="date" required />
              </div>

              {/* <span className={styles['warning-event-time']}>{ storeEvent.warningEventStartDate }</span> */}

              <div className='wrapper-time'>
                <label for="eventTime"> ПО </label>
                <input ref={ endTimeInput } id="timeEnd" type="time" name="timeEnd" list required />
                <input ref={ endDateInput } type="date" required />
              </div>
              {/* <span className={styles['warning-event-time']}>{ storeEvent.warningEventEndDate }</span> */}
            </div>
      </div>

        <div className={styles.main_place}>
        <p className={styles.title + " font_l"}>Где</p>
        <div className={styles.right_section}>
          {/* <select ref={ regionInput }>
            {byCities.regions.map((elem) => (
              <option value={elem.name} key={elem.name}>
                {elem.name}
              </option>
            ))}
          </select> */}
          {/* <SelectCity locationStore={locationStore} region={region} /> */}
          <div className={styles.coordinates}>
          <p>
            lon: <span>{ location.lng }</span>
          </p>
          <p>
            lat: <span>{ location.lat }</span>
          </p>
        </div>
        </div>
      </div>

        <p className={ styles.place_description }>
        Укажите точное место проведения мероприятия на карте
      </p>

        <div className={styles.main_goals}>
          <div className={styles.title + " font_l"}>
            <p >Цели</p>
            <div>
              {/* <span className={styles['warning-event']}>{ storeEvent.warningEventGoal }</span> */}
            </div>
          </div>
          <div className={styles.textarea_wrapper}>
            <textarea
              ref={ goalTextarea }
              maxLength="200"
              placeholder="Раскажите, как ваш проект поможет защитить экологию"
            />
          </div>
        </div>

        <div className={styles.main_task}>
          <div className={styles.title}>
            <p >Описание</p>
            {/* <span className={styles['warning-event']}>{ storeEvent.warningEventDescription }</span> */}
          </div>
          <div className={ styles.textarea_wrapper }>
            <textarea
              ref={ taskTextarea }
              maxLength="200"
              placeholder="Что будете делать"
            />
          </div>
        </div>

        <div className={styles.bottom}>
          <button className={ styles.disabledCursor + " green_btn"} >
            {/* <Observer>
              { () => (
                storeEvent.linkToPage ? <Redirect to = {{ pathname: "/initiatives" }} />  : ""
              )}
            </Observer> */}
            Создать
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}