import React, { useState } from 'react';
import  styles from './_EventsList.module.scss';
import loupeIcon from '../../../modules/assets/loupe.svg';
import { Link } from "react-router-dom";

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
    <div className={ styles.container }>
      <div className={ styles.search }>
        <img className={ styles.search_icon } src={loupeIcon} alt="loupe"/>
        <input
          className={ styles.search_folder }
          type="text"
          placeholder="Ввидети ключевые слова"
          onKeyUp={ focusSearchInput }
        />
      </div>

      <div className={ styles.cards_list }>
        { filteredCards.map((value, id) => {
          return (<div className={ styles.card} key={id}>
            <span className={ styles.card_title }>"{value.title}"</span>
            <span className={ styles.card_type }>Тип: {value.type}</span>
            <span >C {value.start}</span>
            <span >По {value.end}</span>
            <Link className={ styles.more_btn + ' green_btn'} to="/event">Подробнее</Link>
          </div>)
        }) }
      </div>
    </div>
  )
}