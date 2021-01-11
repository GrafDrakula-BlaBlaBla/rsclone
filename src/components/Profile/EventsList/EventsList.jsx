import React, { useState } from 'react';
import './_EventsList.scss';
import loupeIcon from '../../../modules/assets/loupe.svg';

const events = [
  {
    title: 'Сбор мусора',
    type: 'инициатива',
    start: '13.11.2020',
    end: '14.11.2020'
  },

  {
    title: 'Экология',
    type: 'инициатива',
    start: '09.01.2021',
    end: '-'
  },

  {
    title: 'Сбор мусора',
    type: 'инициатива',
    start: '13.11.2020',
    end: '14.11.2020'
  },

  {
    title: 'Сбор мусора',
    type: 'инициатива',
    start: '13.11.2020',
    end: '14.11.2020'
  },
];

export default function EventsList() {
  const [filteredCards, setFilteredCards] = useState(events);

  function focusSearchInput(e) {
    if(e.target.value === '') {
      setFilteredCards(events);
    } else {
      setFilteredCards(filteredCards.filter((value) => {
        return value.title.toLowerCase().includes(e.target.value.toLowerCase())
      }));
    }
  }

  return (
    <div className="events-list">
      <div className="search-events">
        <img className="search-events-loupe-icon" src={loupeIcon} alt="loupe"/>

        <input
          className="search-events-input"
          type="text"
          placeholder="Ввидети ключевые слова"
          onKeyUp={ focusSearchInput }
        />

      </div>
      <div className="event-cards-list">
      { filteredCards.map((value, id) => {
            return (<div className='event-cards-item' key={id}>
              <span className='card-title'>"{value.title}"</span>
              <span className='card-type'>Тип: {value.type}</span>
              <span className='card-data'>C {value.start}</span>
              <span className='card-data'>По {value.end}</span>
              <button className='more-details-btn'>Подробнее</button>
            </div>)
          }) }
      </div>
    </div>
  )
}