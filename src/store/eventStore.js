import { makeObservable, action, observable } from "mobx";
import axios from 'axios';
import * as Validator from 'validatorjs';
import Store from './index';

export default class Event {
  eventTitle = "";
  time = "";
  timeEnd = "";
  startDate = "";
  endDate = "";
  goal = "";
  description = "";
  warningEventTitle = "";
  warningEventStartDate = "";
  warningEventEndDate = "";
  warningEventGoal = "";
  warningEventDescription = "";
  warningTime = "";
  linkToPage = "";

  constructor() {
    makeObservable(this, {
      eventTitle: observable,
      time: observable,
      timeEnd: observable,
      startDate: observable,
      endDate: observable,
      goal: observable,
      warningTime: observable,
      warningEventTitle: observable,
      warningEventStartDate: observable,
      warningEventEndDate: observable,
      warningEventGoal: observable,
      warningEventDescription: observable,
      description: observable,
      linkToPage: observable,
      getEventTitle: action,
      getEventTime: action,
      getEventStartDate: action,
      getEventEndDate: action,
      getEventGoal: action,
      getEventDescription: action,
      createEvent: action,
    });
  }

  getEventTitle = (title) => {
    try {
      this.eventTitle = title;
    } catch (e) {
      console.log("ERROR getEventTitle", e);
    }
  };

  getEventTime = (time) => {
    try {
      this.time = time;
    } catch (e) {
      console.log("ERROR getEventTime", e);
    }
  };
  getEventTimeEnd = (time) => {
    try {
      this.timeEnd = time;
    } catch (e) {
      console.log("ERROR getEventTime", e);
    }
  };

  getEventStartDate = (start) => {
    try {
      this.startDate = start;
    } catch (e) {
      console.log("ERROR getEventStartDate", e);
    }
  };

  getEventEndDate = (end) => {
    try {
      this.endDate = end;
    } catch (e) {
      console.log("ERROR getEventEndDate", e);
    }
  };

  getEventGoal = (goal) => {
    try {
      this.goal = goal;
    } catch (e) {
      console.log("ERROR getEventGoal", e);
    }
  };

  getEventDescription = (description) => {
    try {
      this.description = description;
    } catch (e) {
      console.log("ERROR getEventDescription", e);
    }
  };

  createEvent = () => {
    const event = {
      eventTitle: this.eventTitle,
      startDate: Date.parse(this.startDate + " "+ this.time),
      endDate: Date.parse(this.endDate + " "+ this.timeEnd),
      location: Store.Location.coords,
      goal: this.goal,
      description: this.description,
    };

    const rules = {
      eventTitle: 'required',
      startDate: 'numeric',
      endDate:'numeric',
      goal: 'required|string',
      description: 'required|string',
      startDate: 'valueTime',

    };

    const changeValue =  ( ) => {
       this.linkToPage = true;
    }
    const changeValueFalse = ( ) => {
      this.warningEventTitle =  "";
      this.warningEventStartDate =  "";
      this.warningEventEndDate = "";
      this.warningEventGoal = "";
      this.warningEventDescription = "";
      this.eventTitle = "";
      this.startDate =  "";
      this.time = "";
      this.endDate = "";
      this.timeEnd = "";
      this.goal = "";
      this.description = ""
      this.linkToPage = false;
    }

    const checkTime = () => {
      return event.startDate < event.endDate;
    }

    Validator.register('valueTime', checkTime, 'Укажите правильную последовательность начала и окончания мероприятия');


    let validation = new Validator(event, rules, {
      "required.eventTitle": "Оязательное поле",
      "numeric.startDate" : "Выберите время и дату начала мероприятия",
      "numeric.endDate" : "Выберите время и дату окончания мероприятия",
      "required.goal" : "Обязательное поле",
      "required.description" : "Обязательное поле",
      "string.description" : "Опишите словами мероприятие",
      "valueTime.startDate": 'Время начала мероприятия должно быть меньше окончания',
      });



    if(validation.fails()){
      this.warningEventTitle = validation.errors.first('eventTitle');
      this.warningEventStartDate = validation.errors.first('startDate');
      this.warningEventEndDate = validation.errors.first('endDate');
      this.warningEventGoal = validation.errors.first('goal');
      this.warningEventDescription = validation.errors.first('description');
    }else{
      console.log("pass");

      axios.post('http://localhost:8000/create', {
        event
      })
      .then(function (response) {

        if(response.status === 200){
          changeValue();
          changeValueFalse();
          console.log("200");
        }
        console.log(response);
      })
      .catch(function (error) {

      })
    }
  };
}
