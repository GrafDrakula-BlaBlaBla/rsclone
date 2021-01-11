import React, {useEffect, useState} from 'react';
import './_Calendar.scss';
import user from './user.svg';
import arrayDataEvents from './ArrayDataEvents.jsx';
import stateCalendar from './store/StateCalendar.jsx';
import { observer, useLocalObservable } from "mobx-react-lite";

const nameMonth = [ 'января', 'февраля', 'марта', 'апреля', 'мая',
'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];


const OneDay = observer( (mouth, day, year) => {

useEffect(() => {

stateCalendar.changeBlockOneDay()

    }, [])

stateCalendar.changeStateDayMounthYear(mouth.day, mouth.mouth, mouth.year);

  return(
    <div className="wrapper-one-day">
      <div>
        <div className="wrapper-one-day-header">
          <p>Сегодня</p>
          <p> {mouth.day} {nameMonth[mouth.mouth]}</p>
          <p> { stateCalendar.numberOfEvents } </p>
        </div>
        <div >
          <ul className="list-events-one-day">
            { stateCalendar.listEventsOneDay }
          </ul>
        </div>
      </div>
      <div className="button-create-new-evernt">
        <a href="#" >Создать</a>
      </div>
    </div>
  )
})

export default OneDay;
