import { action, makeObservable, observable } from "mobx";
import { makeAutoObservable } from "mobx"
import  profile from '../actions/profile';

const nameMonth = [ 'января', 'февраля', 'марта', 'апреля', 'мая',
'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

export default class User {

  name = "";
  avatar = "";
  contacts = "";
  dataRegistartion = "";
  location = "";
  range = ""

  constructor() {
      makeAutoObservable(this)
  }

   getValue () {

   profile().then(( data ) => {
     this.name = data[0].name;
     const date = new Date(data[0].dataRegistartion);
     this.dataRegistartion =  date.getDate() + " "+ nameMonth[date.getMonth()] + " " + date.getFullYear();
     this.avatar = "userIcon/" + data[0].avatar;
     this.range = data[0].range < 1000 ? Math.ceil(data[0].range / 200) : 5 ;
     console.log(this.range);

    });

      };



}
