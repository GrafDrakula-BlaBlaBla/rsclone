import React from "react"
import ReactDOM from "react-dom"
import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react-lite"
import arrayDataAllEvents from './../arrayAllTime.jsx';
import user from './../user.svg';

 class StateCalendar {

    listEventsOneDay = []
    numberOfEvents = 0
    day = null
    mounth = null
    year = null

    constructor() {
        makeAutoObservable(this)
    }

    changeStateDayMounthYear(dayState, mounthState, yearState){
      this.day = +dayState
      this.mounth = mounthState
      this.year = yearState
    }

    changeBlockOneDay() {

      arrayDataAllEvents.then((data) => {
      if(data[this.year] == undefined){
        this.listEventsOneDay =  <li className="no-events">Мероприятий нет</li>;
        this.numberOfEvents = "Пока нет";
      } else if(data[this.year][this.mounth] == undefined){
          this.listEventsOneDay =  <li className="no-events">Мероприятий нет</li>;
          this.numberOfEvents = "Пока нет";
        } else if( data[this.year][this.mounth][this.day] == undefined ){
            this.listEventsOneDay =  <li className="no-events">Мероприятий нет</li>;
            this.numberOfEvents = "Пока нет";
          } else {
            this.listEventsOneDay = data[this.year][this.mounth][this.day].map( ( item ) => {
              return (
                <li key={item.id}><div className="user-block-one-day"><img src={ user } /><p>Имя</p></div><p>{item.sammary}</p> <a href="#">Присоединиться</a></li>);
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
