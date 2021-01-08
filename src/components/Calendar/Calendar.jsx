import React, {useEffect, useState} from 'react';
import OneDay from  './OneDay.jsx';
import arrayDataEvents from './ArrayDataEvents.jsx';
import './_Calendar.scss';

 // создание календаря на месяц

 const nameMonth = [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май',
 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
 const dayOfWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

export default function Calendar() {
  let now = new Date();
  let [gridMount, changeGridMount] = useState([]);
  const [dataGrid, changeDataGrid] = useState([]);
  dataGrid.length = 35;


   Date.prototype.daysInMonth = function() {
     return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
   };

  const [nowDay, setDay] = useState(now.getDate());
  const [stateMouth, setMouth] = useState(now.getMonth());
  const [stateYear, setYear] = useState(now.getFullYear());
  const firstDayForWeek = new Date(stateYear, stateMouth, 1);
  const [nowDayOfWeek, setDayOfWeek] = useState(firstDayForWeek.getDay());
  const [nowDaysInMonth, setdaysInMonth] = useState(now.daysInMonth());

  let position;
  let beforeData;

// Создание календаря

 function createOneMounth(stateMouth, stateYear, nowDay, nowDayOfWeek, nowDaysInMonth) {
   let arrayCalendar = [];
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

     arrayCalendar.push(item);
   }
   gridMount = arrayCalendar;

 }

 createOneMounth(stateMouth, stateYear, nowDay, nowDayOfWeek, nowDaysInMonth);

  const daysForWeekElem = [];

  for (var i = 0; i < 7; i++) {
    let item =
    <div className="day-of-week" >
      <div > {dayOfWeek[i]}</div>
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

  arrayDataEvents.then((data) => {

    function createEventsElem(indexDataGrid) {
      let arrayEventsOneDayCaltnlar = [];
      for (var i = 0; i < data[indexDataGrid].length; i++) {
        let item =
            <div>
              { data[indexDataGrid][i]['sammary'] }
            </div>
            arrayEventsOneDayCaltnlar.push(item);
          }
        return arrayEventsOneDayCaltnlar;
    }
    dataGrid.map( ( item, index ) => {
        if(data.hasOwnProperty(index)){
          dataGrid[index] = <div class="day "> {index} { createEventsElem(index) } </div>;
        }else{
          dataGrid[index] = <div> {item} </div>
        }
    })

    console.log(dataGrid);
    changeDataGrid(dataGrid);

    gridMount = dataGrid;

    // console.log(dataGrid);
    // console.log("reques");
  })

useEffect(() => {
<<<<<<< Updated upstream

  // console.log(dataGrid);
  // console.log(gridMount);
  // console.log("use");
  // changeGridMount(gridMount);
>>>>>>> Stashed changes

}, [gridMount])

  return(
    <div className="calendar">
    <div className="wrapper-calendar-mounth">
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
