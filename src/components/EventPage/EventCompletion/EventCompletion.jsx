import React from 'react';
import styles from './_EventCompletion.module.scss';

const EventCompletion = () => {
  return (
    <div className={ styles.container }>
      <div className={ styles.header }>
        <p className={ styles.title }>Сбор мусора</p> 
        <p className={ styles.city }>Минск</p> 
      </div>

      <div className={ styles.middle }>
        <p className={ styles.middle_title }>Что сделали:</p>
        <div className={ styles.text_input_wrapper }>
          <textarea className={ styles.text_input }/>
        </div>
        <div className={ styles.add_photo }>
          <div className={ styles.add_photo_btn }>
            <p>Прекрипить фото...</p>
            <input type='file' accept="image/png, image/jpeg"/>
          </div>
        </div>
      </div>

      <div className={ styles.bottom }>
        <button className={ styles.save_btn }>
          Сохранить
        </button>
      </div>
    </div>
  );
}

export default EventCompletion;