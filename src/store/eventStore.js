import { makeObservable, action, observable } from "mobx";
import { observer } from "mobx-react-lite";

export default class Event {
  eventTitle = "";
  time = "";
  startDate = "";
  endDate = "";
  goal = "";
  description = "";

  constructor() {
    makeObservable(this, {
      eventTitle: observable,
      time: observable,
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
      // createEventCalendar: action,
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

  // createEvent = () => {
  //   const event = {
  //     eventTitle: this.eventTitle,
  //   };
  // };
}
