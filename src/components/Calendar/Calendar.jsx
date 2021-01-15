import React, {useEffect, useState} from 'react';
import OneDay from  './OneDay.jsx';
import { observer, useLocalObservable, computed } from "mobx-react-lite";
import arrayDataAllEvents from './arrayAllTime.jsx';
import stateCalendar from './store/StateCalendarOneDay.jsx'
import stateCalendarMonth from './store/StateCalendarMonth.jsx'
import './_Calendar.scss';

 // создание календаря на месяц arrayDataAllEvents

 const nameMonth = [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май',
 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];


 const Calendar = observer(() => {

  let [now, changeDay] = useState(new Date());

   Date.prototype.daysInMonth = function() {
     return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
   };

   let [gridMount, changeGridMount] = useState([]);
   // сетка месяца
   const [dataGrid, changeDataGrid] = useState([]);
   dataGrid.length = 35;
   dataGrid.fill(null);

   // сегодняшний день
  const [nowDay, setDay] = useState(now.getDate());
  // месяц
  const [stateMouth, setMouth] = useState(now.getMonth());
  // год
  const [stateYear, setYear] = useState(now.getFullYear());
  // первый день месяца
  const firstDayForWeek = new Date(stateYear, stateMouth, 1);
  // день недели первого дня месяца (старт данных)
  const [nowDayOfWeek, setDayOfWeek] = useState(firstDayForWeek.getDay());
  // сколько дней в месяце
  const [nowDaysInMonth, setdaysInMonth] = useState(now.daysInMonth());

  const [oneMounth, changeStateOneMount] = useState([]);
// Создание структуры

  // function createOneMounth( nowDayOfWeek, nowDaysInMonth ) {
  //   let position;
  //   (nowDayOfWeek !== 0) ? position = nowDayOfWeek - 1 :  position = 7 ;
  //
  //   // создание сетки дней (массив с пустыми индексами) СТРУКТУРА
  //   for (var i = 0; i < nowDaysInMonth; i++) {
  //     dataGrid[position + i] = i + 1 ;
  //     }
  //
  //     return dataGrid;
  //   }
  //
  // createOneMounth( nowDayOfWeek, nowDaysInMonth);
  stateCalendarMonth.createOneMounth()
// переключение в лево
 function arrowLeftCalendar() {

   stateMouth == 0 ? now = new Date(stateYear - 1, 11, 1) : now =  new Date(stateYear, stateMouth-1, 1);
   changeDay(now);
   setMouth(now.getMonth());
   setYear(now.getFullYear());
   setDay(now.getDate());
   setDayOfWeek(now.getDay());
   setdaysInMonth(now.daysInMonth());
   let grid = stateCalendarMonth.createOneMounth()
   changeDataGrid(grid);
   stateCalendar.changeStateDayMounthYear(now.getDate(), now.getMonth(), now.getFullYear())
   stateCalendar.changeBlockOneDay()
 }
// переключение в право

 function arrowRightCalendar() {

   stateMouth == 11 ? now = new Date(stateYear + 1, 0, 1) : now =  new Date(stateYear, stateMouth + 1, 1);
   changeDay(now);
   setMouth(now.getMonth());
   setYear(now.getFullYear());
   setDay(now.getDate());
   setDayOfWeek(now.getDay());
   setdaysInMonth(now.daysInMonth());
   let grid =   stateCalendarMonth.createOneMounth();
   changeDataGrid(grid);

   stateCalendar.changeStateDayMounthYear(now.getDate(), now.getMonth(), now.getFullYear())
   stateCalendar.changeBlockOneDay()
 }

// Обновление пустой структуры на календарь с данными
// function changeMounth(data) {
//
//     changeGridMount(data);
//
//   }

// Создание элемента мероприятия
// function createEventsElem(indexDataGrid, data) {
//   let arrayEventsOneDayCaltnlar = [];
//   for (var i = 0; i < data[indexDataGrid].length; i++) {
//     let idEvent = data[indexDataGrid][i]["id"];
//
//     let item =
//         <button className="one-event-calendar btn btn-primary" type="button" data-toggle="modal" data-target= { idEvent }>
//           {data[indexDataGrid][i]['sammary'] }
//         </button>
//         arrayEventsOneDayCaltnlar.push(item);
//       }
//     return arrayEventsOneDayCaltnlar;
// }

// function createDataMonth() {
//
//   arrayDataAllEvents.then((data) => {
//
//     // Перебор структуры
//       let wrapperData = dataGrid.map(( item, index) => {
//
//         let className = 'day';
//       if(data.hasOwnProperty(stateYear)){
//
//         if(data[stateYear].hasOwnProperty(stateMouth)){
//
//             if(data[stateYear][stateMouth].hasOwnProperty(item)){
//
//               dataGrid[index] = <div className={ className }>
//               <div className="namber-day"> { item } </div> { createEventsElem(item, data[stateYear][stateMouth]) } </div>;
//
//               } else {
//                 let itemWithoutData =
//                 <div className={ className } >
//                  <div className="namber-day">{ item } </div>
//                 </div>
//                 dataGrid[index] = itemWithoutData;
//               }
//               return dataGrid[index];
//
//           } else {
//              let itemWithoutData =
//              <div className= { className } >
//               <div className="namber-day">{ item } </div>
//              </div>
//              dataGrid[index] = itemWithoutData;
//              return dataGrid[index];
//            }
//         } else {
//            let itemWithoutData =
//            <div className= { className } >
//             <div className="namber-day">{ item } </div>
//            </div>
//            dataGrid[index] = itemWithoutData;
//            return dataGrid[index];
//          }
//         })
//       changeGridMount(wrapperData);
//   })
// }

// useEffect(() => {
//
// createDataMonth();
//
// }, [stateMouth])
const [stateOneMount, changeOneMount] = useState([]);
useEffect(() => {

//   // Данные пришли => надеть структуру на данные
//     arrayDataAllEvents.then((data) => {
//       // Перебор структуры
//         let wrapperData = dataGrid.map(( item, index) => {
//           let className = 'day';
//            if(data[stateYear][stateMouth].hasOwnProperty(item)){
//
//              dataGrid[index] = <div className={ className }> <div className="namber-day" >  { item } </div> { createEventsElem(item, data[stateYear][stateMouth]) } </div>;
//
//               }else{
//
//                 let itemWithoutData =
//                   <div className={ className }>
//                     <div className="namber-day">{ item }</div>
//                   </div>
//               dataGrid[index] = itemWithoutData;
//             }
//             return dataGrid[index];
//         })
//         changeMounth(wrapperData);
//     })

changeOneMount(stateCalendarMonth.gridOneMount);

}, [])

function clickCalendar( clickCalendarEvent ) {

    if(clickCalendarEvent.target.classList.contains("namber-day")){
        setDay(clickCalendarEvent.target.textContent)
        stateCalendar.changeBlockOneDay(clickCalendarEvent.target.textContent)
    }
  }

  return(
    <div className="calendar">
      <div className="wrapper-calendar-mounth">
        <div className="head-calendar">
          <div className="button-click-calendar" onClick={ arrowLeftCalendar }>&#129152;</div>
          { nameMonth[stateCalendarMonth.stateMouth] } { stateCalendarMonth.stateYear }
          <div className="button-click-calendar" onClick={ arrowRightCalendar }>&#129154;</div>
        </div>
        <div className="wrapper-day-for-week">{stateCalendarMonth.createDayOfWeek()}</div>
        <div className="wrapper-day-calendar" >
          { stateOneMount }
        </div>
      </div>
      <OneDay mouth={ stateMouth } day={nowDay} year={ stateYear }/ >
    </div>

  );
})

export default Calendar;
