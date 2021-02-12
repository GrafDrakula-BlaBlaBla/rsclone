import { makeObservable, action, observable } from "mobx";
import axios from "axios";

export default class EventStore {
  event = {}
  title = '';
  startDate = null;
  endDate = null;
  ownerId = '';
  description = '';
  goal = '';
  location = [];
  members = [];
  completed = null;

  constructor() {
    makeObservable(this, {
      title: observable,
      startDate: observable,
      endDate: observable,
      ownerId: observable,
      description: observable,
      goal: observable,
      location: observable,
      members: observable,
      completed: observable,
      getEventData: action,
    });
  }

  getEventData(googleId) {
    axios.post(process.env.REACT_APP_SERVER + '/eventInfo', { googleId: googleId}).then((data) => {
      const event = data.data;
      this.title = event.eventTitle;
      this.startDate = new Date(event.startDate);
      this.endDate = new Date(event.endDate);
      this.ownerId = event.user;
      this.description = event.description;
      this.goal = event.goal;
      this.location = event.location;
      this.members = event.members;
      this.completed = event.completed;
    });
  }
}
