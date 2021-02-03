import React, { useEffect } from "react";
import styles from "./_EventCompletion.module.scss";
import { inject, Observer } from "mobx-react";

const EventCompletion = inject("store")(({ store }) => {
  const { Event } = store;

  useEffect(() => {});

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <span>Название</span>
          <Observer>{() => <p>Сбор мусора</p>}</Observer>
        </div>
        {/* <div className={styles.city}>
          <span>Локация</span>
          <Observer>{() => <p>Минск</p>}</Observer>
        </div> */}
      </div>

      <div className={styles.middle}>
        <p className={styles.middle_title}>Подведем итог мероприятия:</p>
        <div className={styles.text_input_wrapper}>
          <textarea className={styles.text_input} />
        </div>
        <div className={styles.add_photo}>
          <div className={styles.add_photo_btn}>
            <p>Прекрипить фото...</p>
            <input type="file" accept="image/png, image/jpeg" />
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <button className={styles.save_btn}>Сохранить</button>
      </div>
    </div>
  );
});

export default EventCompletion;
