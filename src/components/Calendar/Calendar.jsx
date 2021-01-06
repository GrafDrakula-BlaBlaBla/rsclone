import React, {useEffect, useState} from 'react';
import OneDay from  './OneDay.jsx';
import resultFetch from  './RequestCalendar.jsx';
import './_Calendar.scss';

 // создание календаря на месяц

 const nameMonth = [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май',
 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
 const dayOfWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

export default function Calendar() {
  let now = new Date();
  const gridMount = [];
  let dataGrid = [];
  dataGrid.length = 35;


   Date.prototype.daysInMonth = function() {
     return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
   };
  const [nowDay, setDay] = useState(now.getDate());
  let [stateMouth, setMouth] = useState(now.getMonth());
  const [stateYear, setYear] = useState(now.getFullYear());
  const firstDayForWeek = new Date(stateYear, stateMouth, 1);
  const [nowDayOfWeek, setDayOfWeek] = useState(firstDayForWeek.getDay());
  const [nowDaysInMonth, setdaysInMonth] = useState(now.daysInMonth());

  let position;
  let beforeData;

 function createOneMounth(stateMouth, stateYear, nowDay, nowDayOfWeek, nowDaysInMonth) {
   (nowDayOfWeek !== 0) ? position = nowDayOfWeek - 1 :  position = 7 ;
   for (var i = 0; i < nowDaysInMonth; i++) {
     dataGrid[position + i] = i + 1 ;

   }
   for (var i = 0; i < dataGrid.length; i++) {
     let className = 'day ';
     className += (nowDay === dataGrid[i]) ? 'now-day' : '';
     let item =
     <div className={className}  >
     <div>{dataGrid[i]}</div>
     </div>
     gridMount.push(item);
   }

 }

 createOneMounth(stateMouth, stateYear, nowDay, nowDayOfWeek, nowDaysInMonth);

  const daysForWeekElem = [];
  for (var i = 0; i < 7; i++) {
    let item =
    <div className="day-of-week" >
      <div> {dayOfWeek[i]}</div>
    </div>
    daysForWeekElem.push(item);
  }


 function arrowLeftCalendar() {
   stateMouth == 0 ? now = new Date(stateYear - 1, 11, 1) : now =  new Date(stateYear, stateMouth-1, 1);
   setMouth(now.getMonth());
   setYear(now.getFullYear());
   setDay(now.getDate());
   setDayOfWeek(now.getDay());
   setdaysInMonth(now.daysInMonth());
   createOneMounth(stateMouth, stateYear, nowDay, nowDayOfWeek, nowDaysInMonth);
 }

 function arrowRightCalendar() {
   stateMouth == 11 ? now = new Date(stateYear + 1, 1, 1) : now =  new Date(stateYear, stateMouth + 1, 1);
   setMouth(now.getMonth());
   setYear(now.getFullYear());
   setDay(now.getDate());
   setDayOfWeek(now.getDay());
   setdaysInMonth(now.daysInMonth());
   createOneMounth(stateMouth, stateYear, nowDay, nowDayOfWeek, nowDaysInMonth);
 }


useEffect(() => {
  // resultFetch.then((data) => {
  //   console.log(data);
  //   const arrayWithData = []
  //   data.map((item) => {
  //     createDataItem(item);
  //   })
  //   function createDataItem(dateOne) {
  //     let dateOneStart =  new Date(dateOne['start']['dateTime']);
  //     let dateOneEnd =  new Date(dateOne['end']['dateTime']);
  //     let sammary = dateOne['summary'];
  //     let description = dateOne['description'];
  //     //Начало
  //     let start = dateOneStart.getDate();
  //     dateOneStart.getHours();
  //     dateOneStart.getMinutes();
  //     //Окончание
  //     let end = dateOneEnd.getDate();
  //     dateOneEnd.getHours();
  //     dateOneEnd.getMinutes();
  //     let dataLoop = {sammary: sammary,
  //       description: description}
  //     for (var i = start; i <= end; i++) {
  //         if (arrayWithData.indexOf(i) === -1) {
  //           arrayWithData[i] = dataLoop;
  //         }
  //         else {
  //           arrayWithData[i].push(dataLoop);
  //
  //         }
  //       }
  //     }
  //     console.log(arrayWithData);
  //
  // })
}, [stateMouth])

  return(
    <div className="calendar">
    <div>
      <div className="head-calendar"> <div className="button-click-calendar" onClick={arrowLeftCalendar}>&#129152;</div>
      {nameMonth[stateMouth]} { stateYear }<div className="button-click-calendar" onClick={arrowRightCalendar}>&#129154;</div></div>
      <div className="wrapper-day-for-week">{daysForWeekElem}</div>
      <div className="wrapper-day-calendar">
      {gridMount}
      </div>
    </div>
      <OneDay mouth={stateMouth} day={nowDay}/ >
    </div>
  );
}
