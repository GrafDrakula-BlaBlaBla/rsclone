import React, { useEffect, useState } from 'react';
import styles from './_EventCreation.module.scss';
import byCities from '../../../modules/data/by-cities';
import SelectCity from './SelectCity/SelectCity';
import stateCoordinates from '../../../state/StateCoordinates.jsx';
import { observer } from "mobx-react-lite";


const EventCreationPage = observer( () => {
  
  return (
    <div className={ styles.container }>
      <div className={ styles.name }>
        <div className={ styles.name_top }>
          <p className={ styles.title }>Название</p>
          <input type='text' placeholder='Введите название мороприятия'/>
        </div>
        <p className={ styles.name_description }>
          Название будет отображаться в списке всех мероприятий.
        </p>
      </div>

      <div className={ styles.main_date }>
        <p className={ styles.title }>Когда</p>
        <div className={ styles['right-section'] }>
          <input type='date'/>
          <p>-</p>
          <input type='date'/>
        </div>
      </div>

      <div className={ styles.main_place }>
        <p className={ styles.title }>Где</p>
        <div className={ styles.right_section }>
          <select
            defaultValue='Минская обл.'
            onChange={ stateCoordinates.changeSelectRegion }>
            { byCities[0].regions.map((elem) => 
              <option value={ elem.name } key={elem.name}>{elem.name} </option>
            ) }
          </select>

          <SelectCity region={ byCities[0].regions.find((elem) => elem.name === stateCoordinates.region) }/>

          <div className={ styles.coordinates }>
            <p>lon: <span> { stateCoordinates.coords.lat } </span></p>
            <p>lat: <span> { stateCoordinates.coords.lng }</span></p>
          </div>
        </div>
      </div>

      <p className={ styles.place_description }>Укажите место проведения мероприятия на карте</p>

      <div className={ styles.main_goals }>
        <p className={ styles['title'] }>Цели</p>
        <div className={ styles['textarea-wrapper']}>
          <textarea maxLength='200' placeholder='Раскажите, как ваш проект поможет защитить экологию'/>
        </div>
      </div>
      
      <div className={ styles.main_task }>
        <p className={ styles['title'] }>Задача</p>
          <div className={ styles['textarea-wrapper']}>
          <textarea maxLength='200' placeholder='Что будете делать'/>
          </div>
      </div>

      <div className={ styles.bottom }>
          <button>
            Создать
          </button>
        </div>
    </div>
  );
})

export default EventCreationPage; 