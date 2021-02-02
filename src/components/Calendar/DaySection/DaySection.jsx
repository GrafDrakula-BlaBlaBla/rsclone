import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './_DaySection.module.scss';
import user from '../../../components/Calendar/user.svg';

const nameMonth = [ 'января', 'февраля', 'марта', 'апреля', 'мая',
'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

export default function DaySection({ dayEvents, selectedYear, selectedMonth, selectedDay }) {
  const [status, setStatus] = useState();
  const [eventsList, setEventsList] = useState();
  const [eventLink, setEventLink] = useState();

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    
    if ((selectedYear < year) || (selectedYear === year && selectedMonth < month) ||
      ( selectedYear === year && selectedMonth === month && selectedDay < day) ){
        setStatus('Прошедшие');
        setEventLink('Посмотреть');
    } else if( selectedYear === year && selectedMonth === month && selectedDay === day){
      setStatus('Сегодня');
      setEventLink('Присоединиться');
    } else {
      setStatus('Предстоящие');
      setEventLink('Присоединиться');
    }

    if(dayEvents.length === 0){
      setEventsList(<li className={ styles.no_events }>Пусто</li>);
    } else {
      setEventsList(dayEvents.map((item, id) => {
        return (
          <li key={"event-" + id}>
            <div className={ styles.event_user }>
              <img src={ user } alt="user-avatar"/><p>Имя</p>
            </div>
            <p>{item.summary}</p>
            <Link to={{ pathname: "/eventInfo", hash: item.id }}>{ eventLink }</Link>
          </li>
        );
      }));
    }
  }, [dayEvents, eventLink, selectedDay, selectedMonth, selectedYear])

  const wordForm = function( num ){
    const cases = [2, 0, 1, 1, 1, 2];
    const words = ['мероприятие', 'мероприятия', 'мероприятий'];
    return words[ (num%100>4 && num%100<20)? 2 : cases[(num%10<5)?num%10:5] ];
  }

  return(
    <div className={ styles.wrapper }>
      <div>
        <div className={ styles.header }>
          <p> { status } </p>
          <p> {selectedDay} {nameMonth[selectedMonth]}</p>
          <p> { dayEvents.length + ' ' +  wordForm(dayEvents.length)} </p>
        </div>
        <div >
          <ul className={ styles.events_list }>
            { eventsList }
          </ul>
        </div>
      </div>
      <Link
        className={ styles.create_event_btn + " green_btn"}
        to={`/createEvent`}
      >Создать</Link>
    </div>
  )
}
