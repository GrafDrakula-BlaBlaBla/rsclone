import React from 'react';
import './_EventsHistory.scss';

const events = [
  {
    event: 'Получили звезду',
    date: '02.12.2020',
    details: 'за инициативу “Сбор мусора”'
  },
  {
    event: 'Получили звезду',
    date: '12.12.2020',
    details: 'за прохождение игры”'
  },
  {
    event: 'Присоединились',
    date: '14.12.2020',
    details: 'к инициативе “Лекция”'
  },
];

export default function EventsHistory() {
  return (
    <div className="events-history">
      <div className="events-history-title">История событий</div>
      <div className="events-history-items">
        {events.map((value, index) => {
          return <div className="events-history-item" key={ index }>{ value.event } { value.date } { value.details }</div>
        })}
      </div>
    </div>
  );
}