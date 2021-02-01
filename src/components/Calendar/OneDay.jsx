import React, {useEffect} from 'react';
import './_Calendar.scss';
import { Link } from 'react-router-dom';
import stateCalendar from '../../state/StateCalendarOneDay.jsx';
import { observer } from "mobx-react-lite";

const nameMonth = [ 'января', 'февраля', 'марта', 'апреля', 'мая',
'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];


const OneDay = observer((mouth) => {

useEffect(() => {
  stateCalendar.changeBlockOneDay();
}, [])


stateCalendar.changeStateDayMounthYear(mouth.day, mouth.mouth, mouth.year, mouth.status);
  return(
    <div className="wrapper-one-day">
      <div>

        <div className="wrapper-one-day-header">
          <p> { mouth.status } </p>
          <p> {mouth.day} {nameMonth[mouth.mouth]}</p>
          <p> { stateCalendar.numberOfEvents } </p>
        </div>
        <div >
          <ul className="list-events-one-day">
            { stateCalendar.listEventsOneDay }
          </ul>
        </div>
      </div>
      <Link className="button-create-new-evernt green_btn" to={`/createEvent`} activeClassName="active" >Создать</Link>
    </div>
  )
})

export default OneDay;
