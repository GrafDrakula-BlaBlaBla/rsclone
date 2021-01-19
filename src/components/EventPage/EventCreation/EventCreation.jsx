import React, { useState } from 'react';
import styles from './_EventCreation.module.scss';
import byCities from '../../../modules/data/by-cities';
import SelectCity from './SelectCity/SelectCity';

export default function EventCreationPage() {
  const [ region, setRegion ] = useState('Минская обл.');

  function selectRegion(event) {
    setRegion(event.target.value);
  }

  return (
    <div className={ styles.container }>
      <div className={ styles.name }>
        <div className={ styles.name_top }>
          <p className={ styles.title + ' font_l' }>Название</p>
          <input type='text' placeholder='Введите название ивента'/>
        </div>
        <p className={ styles.name_description + ' font_s' }>
          Заданное название будет отображаться в списке всех ивентов.
        </p>
      </div>

      <div className={ styles.main_date }>
        <p className={ styles.title + ' font_l' }>Когда</p>
        <div className={ styles['right-section'] }>
          <input type='date'/>
          <p>-</p>
          <input type='date'/>
        </div>
      </div>

      <div className={ styles.main_place }>
        <p className={ styles.title  + ' font_l' }>Где</p>
        <div className={ styles['right-section'] }>
          <select
            defaultValue='Минская обл.'
            onChange={ selectRegion }>
            { byCities[0].regions.map((elem) =>
              <option value={ elem.name } key={elem.name}>{elem.name}</option>
            ) }
          </select>
          <SelectCity region={ byCities[0].regions.find((elem) => elem.name === region) }/>
        </div>
      </div>

      <div className={ styles.main_task }>
        <p className={ styles.title + ' font_l' }>Задача</p>
        <div className={ styles['textarea-wrapper']}>
          <textarea maxLength='200' placeholder='Опешити задачу'/>
        </div>
      </div>

      <div className={ styles.main_goals }>
        <p className={ styles.title  + ' font_l' }>Цели</p>
        <div className={ styles['textarea-wrapper']}>
          <textarea maxLength='200' placeholder='Опешити цели'/>
        </div>
      </div>

      <div className={ styles.bottom }>
          <button className='green_btn'>Создать</button>
      </div>
    </div>
  );
}