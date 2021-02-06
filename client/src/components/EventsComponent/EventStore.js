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
      getData: action,
    });
  }

  getData(googleId) {
    axios.post('/eventInfo', { googleId: googleId}).then((data) => {
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