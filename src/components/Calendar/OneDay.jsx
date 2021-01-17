import React, {useEffect} from 'react';
import './_Calendar.scss';
import { Link } from 'react-router-dom';
import stateCalendar from '../../state/StateCalendarOneDay.jsx';
import { observer } from "mobx-react-lite";

const nameMonth = [ 'января', 'февраля', 'марта', 'апреля', 'мая',
'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];


const OneDay = observer( (mouth, day, year) => {

useEffect(() => {

stateCalendar.changeBlockOneDay();

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
        <Link to={`/create`} activeClassName="active">Создать</Link>
      </div>
    </div>
  )
})

export default OneDay;
