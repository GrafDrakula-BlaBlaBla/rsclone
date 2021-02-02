import { action, makeObservable, observable } from "mobx";
import  profile from '../actions/profile';
import  evetnsProfile from '../actions/EventsForProfile';


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
  eventsHistory = "";
  eventsList = "";



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
        eventsHistory: observable,
        eventsList: observable,
        events: action,
        })
      }

    events () {


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

     evetnsProfile( this.id ).then(( data ) => {

       const userGame = {
         eventTitle: 'Игру',
         startDate: new Date(this.gameDay),
         user: this.id,
       }

       data[0].push(userGame);
       function sortByAge(arr) {
         arr.sort((a, b) => new Date(a.startDate) > new Date(b.startDate) ? 1 : -1);
       }
       sortByAge(data[0])
       let idUser = this.id;

       const itemList = createCards(data, idUser);
       this.eventsHistory = itemList;
     })
    });

    function createCards(events, idUser) {

    const result = events[0].map((value, index) => {
      let now = new Date(value['startDate']);

      let kind = (value['user'] === idUser) ? 'Получили 100 единиц кислорода за' : 'Присоединились к';
      let oneLog = {
            event: kind,
            date:  now.getDate() + " " + nameMonth[now.getMonth()] +" " + now.getFullYear(),
            details: `"${value['eventTitle']}"`,
        }
        return oneLog;
      })

    return result.map((value, index) => {

      return <div className="events-history-item" key={ index }>{ value.event }  { value.details } { value.date }</div>
        })
    }

  };
}
