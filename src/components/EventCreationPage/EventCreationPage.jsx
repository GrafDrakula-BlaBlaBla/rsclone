import React, { useState } from 'react';
import styles from './_EventCreationPage.module.scss';
import byCities from '../../modules/data/by-cities';
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import SelectCity from './SelectCity/SelectCity';

export default function EventCreationPage() {
  const [ region, setRegion ] = useState('Минская обл.');

  function selectRegion(event) {
    setRegion(event.target.value);
  }

  return (
    <div className={ styles['event-creation-page'] }>
      <div className={ styles['map-section'] }>MAP</div>
      <div className={ styles['creator-section'] }>
        <SectionWrapper title='Создание'>
          <div className={ styles['creator-main'] }>
            <div className={ styles['main-name'] }>
              <div className={ styles['name-top'] }>
                <p className={ styles['title'] }>Название</p>
                <input type='text' placeholder='Введите название ивента'/>
              </div>
              <p className={ styles['name-description'] }>
                Заданное название будет отображаться в списке всех ивентов.
              </p>
            </div>

            <div className={ styles['main-date'] }>
              <p className={ styles['title'] }>Когда</p>
              <div className={ styles['right-section'] }>
                <input type='date'/>
                <p>-</p>
                <input type='date'/>
              </div>
            </div>

            <div className={ styles['main-place'] }>
            <p className={ styles['title'] }>Где</p>
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

            <div className={ styles['main-task'] }>
              <p className={ styles['title'] }>Задача</p>
              <div className={ styles['textarea-wrapper']}>
                <textarea maxLength='200' placeholder='Опешити задачу'/>
              </div>
            </div>

            <div className={ styles['main-goals'] }>
              <p className={ styles['title'] }>Цели</p>
              <div className={ styles['textarea-wrapper']}>
                <textarea maxLength='200' placeholder='Опешити цели'/>
              </div>
            </div>

            <div className={ styles['main-bottom'] }>
              <button>
                Создать
              </button>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
}