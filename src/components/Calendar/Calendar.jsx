import React from 'react';
import './_Calendar.scss';

const CALENDAR_ID = 'bosba9d@gmail.com'
const API_KEY = 'AIzaSyAhfRY8AD5ylbweL7dx6MjXOvRFq1jz6o0'
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

  Date.prototype.daysInMonth = function() {
  		return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
  	};


export default function Calendar() {
  const nameMonth = [ 'Января', 'Февраля', 'Марта', 'Апреля', 'Мая',
  'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
  const dayOfWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  const now = new Date();
  const stateMouth = now.getMonth();
  const stateYear = now.getFullYear();
  //номер дня
  const nowDay = now.getDate();
  const gridMount = [];
  //день недели
  const nowDayOfWeek = now.getDay();

  let dataGrid = [];
  dataGrid.length = 35;

  if(nowDay/7 < 1){
      let position = 0;
      (now.daysInMonth() != 0) ? position = nowDayOfWeek - 1 :  position = 7 ;

      for (var i = 0; i < now.daysInMonth(); i++) {
        dataGrid[position + i] = i + 1;
      }
  let beforeData;
   stateMouth != 0 ? beforeData =  new Date(stateYear, stateMouth - 1, 1) :  beforeData =  new Date(stateYear-1, 11, 1);
   let beforeMouth = beforeData.daysInMonth();
    for (var i = position-1; i >= 0; i--) {
    dataGrid[i] = beforeMouth;
    beforeMouth = beforeMouth -1;
   }
  }
  for (var i = 0; i < dataGrid.length; i++) {
    let className = 'day ';
    className += (nowDay == dataGrid[i]) ? 'now-day' : '';
    let item =
    <div className={className}  >
      <div>{dataGrid[i]}</div>
    </div>
    gridMount.push(item);
  }


  const daysForWeekElem = [];
  for (var i = 0; i < 7; i++) {
    let item =
    <div className="day-of-week" >
      <div> {dayOfWeek[i]}</div>
    </div>
    daysForWeekElem.push(item);
  }


  return(
    <div className="calendar">
      <div className="head-calendar"> <div>&#129152;</div> {nowDay} {nameMonth[stateMouth]} <div>&#129154;</div></div>
      <div class="wrapper-day-calendar">
        {daysForWeekElem}
        {gridMount}
      </div>
    </div>
  );
}
