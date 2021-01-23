import { makeObservable, action, observable } from "mobx";

export default class Event {
  eventTitle = "";
  startDate = "";
  endDate = "";
  location = {};
  region = "";
  town = "";
  goal = "";
  description = "";

  constructor() {
    makeObservable(this, {
      eventTitle: observable,
      startDate: observable,
      endDate: observable,
      location: observable,
      region: observable,
      town: observable,
      goal: observable,
      description: observable,

      getEventTitle: action,
      getEventStartDate: action,
      getEventEndDate: action,
      getEventGoal: action,
      getEventDescription: action,
    });
  }

  getEventTitle = (title) => {
    try {
      this.eventTitle = title;
    } catch (e) {
      console.log("ERROR getEventTitle", e);
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
}
