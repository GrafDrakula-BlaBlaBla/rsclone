import React, {useEffect, useState} from 'react';
import './_Calendar.scss';
import user from './user.svg';
import arrayDataEvents from './ArrayDataEvents.jsx';


const nameMonth = [ 'января', 'февраля', 'марта', 'апреля', 'мая',
'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];


export default function OneDay(mouth, day) {

let [listEventsOneDay, listOneDay] = useState([]);
let [numberOfEvents, changeNumberOfEvents] = useState();

  arrayDataEvents.then((data) => {

      if(data[mouth.day] == undefined){
        return (
          listEventsOneDay =  <li>Мероприятий нет</li>);

      }else{
          listEventsOneDay = data[mouth.day].map( ( item ) => {
            return (
                <li key={item.id}><img src={ user } /><p>Имя</p><p>{item.sammary}</p> <a href="#">Присоединиться</a></li>);
            })
          let wordForm = function( num, word ){
              	let cases = [2, 0, 1, 1, 1, 2];
              	return word[ (num%100>4 && num%100<20)? 2 : cases[(num%10<5)?num%10:5] ];
              }

            numberOfEvents = data[mouth.day].length + wordForm(data[mouth.day].length, [' мероприятие', ' мероприятия', ' мероприятий']);
      }
  })

useEffect(() => {

      listOneDay(listEventsOneDay);
      changeNumberOfEvents(numberOfEvents);

  }, [listEventsOneDay, numberOfEvents])

  return(
    <div>
      <div className="wrapper-one-day-header">
        <p>Сегодня</p>
        <p> {mouth.day} {nameMonth[mouth.mouth]}</p>
        <p> { numberOfEvents } </p>
      </div>
      <div >
        <ul className="list-events-one-day">
          { listEventsOneDay }
        </ul>
      </div>
      <div className="button-create-new-evernt">
        <a href="#" >Создать</a>
      </div>
    </div>
  )
}
