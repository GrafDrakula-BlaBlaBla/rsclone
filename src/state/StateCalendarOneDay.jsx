import React from "react"
import { makeAutoObservable } from "mobx"
import arrayDataAllEvents from './../actions/arrayAllTime.jsx';
import user from './../components/Calendar/user.svg';

 class StateCalendar {
    allToday = new Date();
    dayToday = this.allToday.getDate();
    mounthToday = this.allToday.getMonth();
    yearToday = this.allToday.getFullYear();
    listEventsOneDay = []
    numberOfEvents = 0
    day = null
    mounth = null
    year = null
    status = null;
    eventsTextLeft = null;
    linkAdd = null;

    constructor() {
        makeAutoObservable(this)
    }

    changeStateDayMounthYear(dayState, mounthState, yearState){
      this.day = +dayState
      this.mounth = mounthState
      this.year = yearState
      if( (this.year < this.yearToday) || (this.year === this.yearToday && this.mounth < this.mounthToday) ||
        ( this.year === this.yearToday && this.mounth === this.mounthToday && this.day < this.dayToday) ){
         this.status = "Прошедшие";
         this.eventsTextLeft = "не было";
         this.linkAdd = "Посмотреть";
         }else if( this.year === this.yearToday && this.mounth === this.mounthToday && this.day === this.dayToday){
            this.status =  "Сегодня";
            this.eventsTextLeft = "пока нет";
            this.linkAdd = "Присоединиться";
          } else {
            this.status =  "Предстоящие";
            this.eventsTextLeft = "пока нет";
            this.linkAdd = "Присоединиться";
          }
        }

    changeBlockOneDay() {

      arrayDataAllEvents().then((data) => {

      if(data[this.year] === undefined){
        this.listEventsOneDay =  <li className="no-events" key={"no-events" + Math.ceil(Math.random()*10000000000)}>Пусто</li>;
        this.numberOfEvents = this.eventsTextLeft;
      } else if(data[this.year][this.mounth] === undefined){
          this.listEventsOneDay =  <li className="no-events" key={"no-events" + Math.ceil(Math.random()*10000000000)} >Пусто</li>;
          this.numberOfEvents = this.eventsTextLeft;
        } else if( data[this.year][this.mounth][this.day] === undefined ){
            this.listEventsOneDay =  <li className="no-events" key={"no-events" + Math.ceil(Math.random()*10000000000)} >Пусто</li>;
            this.numberOfEvents = this.eventsTextLeft;
          } else {
            this.listEventsOneDay = data[this.year][this.mounth][this.day].map( ( item ) => {
              return (
                <li key={"event-" + Math.ceil(Math.random()*10000000000)} ><div className="user-block-one-day"><img src={ user } alt="user-avatar"/><p>Имя</p></div><p>{item.sammary}</p><a href="/">{ this.linkAdd }</a></li>);
              })

              let wordForm = function( num, word ){
                let cases = [2, 0, 1, 1, 1, 2];
                return word[ (num%100>4 && num%100<20)? 2 : cases[(num%10<5)?num%10:5] ];
              }
              this.numberOfEvents = data[this.year][this.mounth][this.day].length + wordForm(data[this.year][this.mounth][this.day].length, [' мероприятие', ' мероприятия', ' мероприятий']);
            }

          })
    }
}

export default new StateCalendar()
