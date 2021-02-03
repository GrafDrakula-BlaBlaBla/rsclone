import { action, makeObservable, observable } from "mobx";
import  profile from '../actions/profile';
import  evetnsProfile from '../actions/EventsForProfile';
import * as jwt from "jsonwebtoken";


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
  id = "";
  eventsHistory = "";
  eventsList = "";
  idWithoutDecode= "";



  constructor() {

      makeObservable(this,
      {
        name: observable,
        avatar: observable,
        contacts: observable,
        dataRegistartion: observable,
        location: observable,
        range: observable,
        oxygen: observable,
        eventsUser: observable,
        gameDay:  observable,
        eventsHistory: observable,
        eventsList: observable,
        idWithoutDecode: observable,
        getValue: action,
        idUser: action,
        decodeId: action,
        })
      }


    idUser ( id ) {
        this.id = id;
        return id;
      }

    getIdinLocalStore(){
      if(localStorage.getItem('ecologyBY') === null){
          return null;
        } else {
          const idToken = JSON.parse(localStorage.getItem('ecologyBY'));
          const now = new Date().getTime();
          if (now > idToken.timestamp + 3600000){
              localStorage.removeItem('ecologyBY');
              return null;
           }
           this.id = idToken.value;
           return this.id;
         }
    }

    decodeId(){

      if(localStorage.getItem('ecologyBY') === null){
          return null;
        } else {
          const idToken = JSON.parse(localStorage.getItem('ecologyBY'));
           this.id = idToken.value;
           const decoded = jwt.decode(this.id);
           return decoded['id'];
         }
      }

   getValue ( id ) {

     this.id = id;

     profile( this.id ).then(( data ) => {

     this.gameDay = data[0].finishedGame;
     this.name = data[0].name;
     const date = new Date(data[0].dataRegistartion);
     this.dataRegistartion =  date.getDate() + " "+ nameMonth[date.getMonth()] + " " + date.getFullYear();
     this.avatar = data[0].avatar;
     this.oxygen = data[0].range;
     this.range = data[0].range;

     evetnsProfile( this.id ).then(( data ) => {
       if(this.gameDay !==  undefined){
         const userGame = {
           eventTitle: 'Игру',
           startDate: new Date(this.gameDay),
           user: this.decodeId(),
         }
         data[0].push(userGame);
       }

       function sortByAge(arr) {
         arr.sort((a, b) => new Date(a.startDate) > new Date(b.startDate) ? 1 : -1);
       }
       sortByAge(data[0])

       let idUser = this.decodeId();

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
