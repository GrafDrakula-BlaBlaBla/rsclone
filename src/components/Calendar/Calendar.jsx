import React, {useEffect} from 'react';
import OneDay from  './OneDay.jsx';
import { observer } from "mobx-react-lite";
import stateCalendar from '../../state/StateCalendarOneDay.jsx'
import stateCalendarMonth from '../../state/StateCalendarMonth.jsx'
import './_Calendar.scss';
import styles from '../SectionWrapper/_SectionWrapper.module.scss';
import SectionWrapper from '../SectionWrapper/SectionWrapper';

 // создание календаря на месяц arrayDataAllEvents

 const nameMonth = [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май',
 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];


 const Calendar = observer(() => {

// переключение в лево
 function arrowLeftCalendar() {
   stateCalendar.changeBlockOneDay();
   stateCalendarMonth.arrowLeftCalendarState();
 }
// переключение в право

 function arrowRightCalendar() {
   stateCalendar.changeBlockOneDay();
   stateCalendarMonth.arrowRightCalendarState();
  }

useEffect(() => {

stateCalendarMonth.createOneMounth();

 }, [stateCalendarMonth.now])

useEffect(() => {

  stateCalendarMonth.createOneMounth();

}, [])

function clickCalendar( clickCalendarEvent ) {

    if(clickCalendarEvent.target.classList.contains("namber-day")){
        stateCalendarMonth.nowDay = clickCalendarEvent.target.textContent;
        stateCalendar.changeBlockOneDay(clickCalendarEvent.target.textContent)
    }
  }

  return(
  <SectionWrapper>
    <div className="calendar" >
      <div className="wrapper-calendar-mounth">
        <div className="head-calendar">
          <div className="button-click-calendar" onClick={ arrowLeftCalendar }>&#129152;</div>
          { nameMonth[stateCalendarMonth.stateMouth] } { stateCalendarMonth.stateYear }
          <div className="button-click-calendar" onClick={ arrowRightCalendar }>&#129154;</div>
        </div>
        <div className="wrapper-day-for-week">{stateCalendarMonth.createDayOfWeek()}</div>
        <div className="wrapper-day-calendar" onClick={ clickCalendar } >
          { stateCalendarMonth.gridOneMount }
        </div>
      </div>
      <OneDay mouth={ stateCalendarMonth.stateMouth } day={ stateCalendarMonth.nowDay } year={ stateCalendarMonth.stateYear } status={ stateCalendar.status }/ >
    </div>
  </SectionWrapper>
  );
})

export default Calendar;
