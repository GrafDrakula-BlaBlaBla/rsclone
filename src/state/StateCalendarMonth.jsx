import React from "react";
import { Link } from "react-router-dom";
import { makeAutoObservable } from "mobx";
import arrayDataAllEvents from './../actions/arrayAllTime.jsx';

class StateCalendarMonth {
  constructor() {
    makeAutoObservable(this);
  }

  dayOfWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

  now = new Date();
  nowDay = this.now.getDate();
  stateMouth = this.now.getMonth();
  stateYear = this.now.getFullYear();
  nowDaysInMonth = new Date(this.now.getFullYear(), this.now.getMonth(), 0).getDate();
  firstDayForWeek = new Date(this.stateYear, this.stateMouth, 1);
  nowDayOfWeek = this.firstDayForWeek.getDay();
  gridOneMount = null;

  createDayOfWeek(){
    const daysForWeekElem = [];

    for (let i = 0; i < 7; i++) {
      const item =
      <div className="day-of-week" key={"day-of-" + i }>
        <div key={"day-of-week-" + i }>{this.dayOfWeek[i]}</div>
      </div>;
      daysForWeekElem.push(item);
    }
    return daysForWeekElem;
  }

  // Создание элемента мероприятия
  createEventsElem(indexDataGrid, data) {
    const eventsItems = [];
    for (let i = 0; i < data[indexDataGrid].length; i++) {
      const idEvent = data[indexDataGrid][i]["id"];
      const item =
        <Link
          to = {{ pathname: "/eventInfo", hash: idEvent }}
          className = "one-event-calendar btn btn-primary"
          type = "button" data-toggle="modal"
          data-target = { idEvent }
          key = { idEvent }
          onClick = { () => console.log(data[indexDataGrid][i]) }
        >
          { data[indexDataGrid][i]['sammary'] }
        </Link>
      eventsItems.push(item);
    }
    return eventsItems;
  }

  createGridOneMounth() {
    let position;
    const dataGrid = new Array(35);
    dataGrid.fill(null);
    (this.nowDayOfWeek !== 0) ? position = this.nowDayOfWeek - 1 :  position = 7 ;

    // создание сетки дней (массив с пустыми индексами) СТРУКТУРА
    for (let i = 0; i < this.nowDaysInMonth; i++) {
      dataGrid[position + i] = i + 1 ;
    }
    return dataGrid;
  }

  createOneMounth() {
    const gridResultFunction = this.createGridOneMounth();

    arrayDataAllEvents().then(( data ) => {
      const resultDataGrid = gridResultFunction.map(( item, id ) => {

        // Перебор структуры
        if (data[this.stateYear].hasOwnProperty(this.stateMouth) && data[this.stateYear][this.stateMouth].hasOwnProperty(item)) {
          return (
            <div className= { 'day' } key={ 'day-' + id} >
              <div className="namber-day">{ item }</div>
              { this.createEventsElem(item, data[this.stateYear][this.stateMouth]) }
            </div>
          );
        } else {
          return (
            <div className={ 'day' } key={'day-' + id}>
              <div className="namber-day">{ item } </div>
            </div>
          );
        }
      });

      this.gridOneMount = resultDataGrid;
    });
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

export default new StateCalendarMonth();
