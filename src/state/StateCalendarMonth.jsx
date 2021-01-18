import React from "react"
import { makeAutoObservable } from "mobx"
import arrayDataAllEvents from './../actions/arrayAllTime.jsx'

Date.prototype.daysInMonth = function() {
  return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
};

class StateCalendarMonth {

  dayOfWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  
  now = new Date();
  nowDay = this.now.getDate();
  stateMouth = this.now.getMonth();
  stateYear = this.now.getFullYear();
  nowDaysInMonth = this.now.daysInMonth();
  firstDayForWeek = new Date(this.stateYear, this.stateMouth, 1);
  nowDayOfWeek = this.firstDayForWeek.getDay();
  gridOneMount = null;



   constructor() {
       makeAutoObservable(this)
   }

  createDayOfWeek(){
    const daysForWeekElem = [];

    for (var i = 0; i < 7; i++) {
      let item =
      <div className="day-of-week" >
        <div > {this.dayOfWeek[i]}</div>
      </div>
      daysForWeekElem.push(item);
    }
    return daysForWeekElem;
  }
    // Создание элемента мероприятия
    createEventsElem(indexDataGrid, data) {
      let arrayEventsOneDayCaltnlar = [];
      for (var i = 0; i < data[indexDataGrid].length; i++) {
        let idEvent = data[indexDataGrid][i]["id"];

        let item =
            <button className="one-event-calendar btn btn-primary" type="button" data-toggle="modal" data-target= { idEvent } key= { idEvent } >
              {data[indexDataGrid][i]['sammary'] }
            </button>
            arrayEventsOneDayCaltnlar.push(item);
          }
        return arrayEventsOneDayCaltnlar;
    }

      createGridOneMounth() {
        let position;
        let dataGrid = new Array(35);
        dataGrid.fill(null);
        (this.nowDayOfWeek !== 0) ? position = this.nowDayOfWeek - 1 :  position = 7 ;
        // создание сетки дней (массив с пустыми индексами) СТРУКТУРА
        for (var i = 0; i < this.nowDaysInMonth; i++) {

          dataGrid[position + i] = i + 1 ;
        }
        return dataGrid;
      }

      createOneMounth() {

        let gridResultFunction = this.createGridOneMounth();

        arrayDataAllEvents.then(( data ) => {

        let resultDataGrid = gridResultFunction.map(( item, index) => {

         // Перебор структуры
         let className = 'day';

         if(data.hasOwnProperty(this.stateYear)){

           if(data[this.stateYear].hasOwnProperty(this.stateMouth)){

             if(data[this.stateYear][this.stateMouth].hasOwnProperty(item)){
                 gridResultFunction[index] = <div className= { className } key={ "day-" + Math.ceil(Math.random()*10000000000)} >
               <div className="namber-day"> { item } </div> { this.createEventsElem(item, data[this.stateYear][this.stateMouth]) } </div>;

             } else {

               let itemWithoutData =
               <div className={ className } key={Math.ceil(Math.random()*10000000000)}>
                <div className="namber-day">{ item } </div>
               </div>

               gridResultFunction[index] = itemWithoutData;
             }
           } else {
             let itemWithoutData =
             <div className= { className } key={Math.ceil(Math.random()*10000000000)}>
              <div className="namber-day"> { item } </div>
             </div>
             gridResultFunction[index] = itemWithoutData;
           }

         } else {
           let itemWithoutData =
           <div className= { className } key={Math.ceil(Math.random()*10000000000)}>
            <div className="namber-day">{ item } </div>
           </div>
           gridResultFunction[index] = itemWithoutData;

         }
        return gridResultFunction[index];
       })
      this.gridOneMount = resultDataGrid;
     })
   }

   arrowRightCalendarState() {

    this.stateMouth === 11 ? this.now = new Date(this.stateYear + 1, 0, 1) : this.now =  new Date(this.stateYear, this.stateMouth + 1, 1);
    this.nowDay = this.now.getDate();
    this.stateMouth = this.now.getMonth();
    this.stateYear = this.now.getFullYear();
    this.nowDaysInMonth = this.now.daysInMonth();
    this.firstDayForWeek = new Date(this.stateYear, this.stateMouth, 1);
    this.nowDayOfWeek = this.firstDayForWeek.getDay();

   }

   arrowLeftCalendarState(){

     this.stateMouth === 0 ? this.now = new Date(this.stateYear - 1, 11, 1) : this.now =  new Date(this.stateYear, this.stateMouth-1, 1);
     this.nowDay = this.now.getDate();
     this.stateMouth = this.now.getMonth();
     this.stateYear = this.now.getFullYear();
     this.nowDaysInMonth = this.now.daysInMonth();
     this.firstDayForWeek = new Date(this.stateYear, this.stateMouth, 1);
     this.nowDayOfWeek = this.firstDayForWeek.getDay();
   }

  }

export default new StateCalendarMonth()
