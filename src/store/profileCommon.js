import { action, makeObservable, observable } from "mobx";
import  profile from '../actions/profile';

const nameMonth = [ 'января', 'февраля', 'марта', 'апреля', 'мая',
'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

export default class User {

  name = "";
  avatar = "";
  contacts = "";
  dataRegistartion = "";
  location = "";
  range = "";
  oxygen = "";
  eventsUser = "";
  gameDay = "";
  id ="6015781f16f2051ff6a5e36a";


  constructor() {
      makeObservable(this,
      {
        name: observable,
        avatar: observable,
        contacts: observable,
        dataRegistartion: observable,
        location: observable,
        range: observable,
        getValue: action,
        oxygen: observable,
        eventsUser: observable,
        gameDay:  observable,
        })
      }

   getValue () {

     profile().then(( data ) => {
     this.gameDay = data[0].finishedGame;
     this.name = data[0].name;
     const date = new Date(data[0].dataRegistartion);
     this.dataRegistartion =  date.getDate() + " "+ nameMonth[date.getMonth()] + " " + date.getFullYear();
     this.avatar = data[0].avatar;
     this.oxygen = data[0].range;
     this.range = data[0].range < 1000 ? Math.ceil(data[0].range / 200) : 5 ;
     console.log(data[0]);
    });

  };
}
