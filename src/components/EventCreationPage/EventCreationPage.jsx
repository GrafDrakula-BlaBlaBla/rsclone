import React from 'react';
import styles from './_EventCreationPage.module.scss';
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import byCities from '../../modules/data/by-cities';

export default function EventCreationPage() {
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
                onChange={(elem) => console.log(elem.target.value)}>
                { byCities[0].regions.map((elem) =>
                  <option value={ elem.name } key={elem.name}>{elem.name}</option>
                ) }
              </select>
              <input
                className="search-events-input"
                type="text"
                placeholder="Ввидети название города"
                onKeyUp={ console.log(2) }
              />
            </div>
            </div>

            <div className={ styles['main-task'] }>
              <p className={ styles['title'] }>Задача</p>
              <textarea maxlength='200' placeholder='Опешити задачу'/>
            </div>

            <div className={ styles['main-goals'] }>
              <p className={ styles['title'] }>Цели</p>
              <textarea maxlength='200' placeholder='Опешити цели'/>
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