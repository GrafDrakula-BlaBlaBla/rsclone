import { makeObservable, action, observable } from "mobx";
import { observer } from "mobx-react-lite";
import axios from 'axios';
import * as Validator from 'validatorjs';
import Location from "./locationStore";

export default class Event {
  eventTitle = "";
  time = "";
  timeEnd = "";
  startDate = "";
  endDate = "";
  goal = "";
  description = "";

  constructor() {

    makeObservable(this, {
      eventTitle: observable,
      time: observable,
      timeEnd: observable,
      startDate: observable,
      endDate: observable,
      goal: observable,
      description: observable,
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
      location: "test",
      goal: this.goal,
      description: this.description,

    };

    let rules = {
      eventTitle: 'required|size:3',
      startDate: 'min:18',
      endDate:'min:18',
      location:'string',
      goal: 'required|size:10|string',
      description: 'required|size:20|string'
    };

    axios.post('http://localhost:8000/authentication-google', {
      event
      })
      .then(function (response) {
          console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
}
