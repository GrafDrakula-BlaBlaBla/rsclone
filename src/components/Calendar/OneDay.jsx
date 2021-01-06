import React, {useEffect, useState} from 'react';
import resultFetch from  './RequestCalendar.jsx';
import './_Calendar.scss';
import user from './user.svg';


const nameMonth = [ 'января', 'февраля', 'марта', 'апреля', 'мая',
'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
resultFetch.then((data) => {
  console.log(data);
  const arrayWithData = []
  data.map((item) => {
    createDataItem(item);
  })
  function createDataItem(dateOne) {
    let dateOneStart =  new Date(dateOne['start']['dateTime']);
    let dateOneEnd =  new Date(dateOne['end']['dateTime']);
    let sammary = dateOne['summary'];
    let description = dateOne['description'];
    //Начало
    let start = dateOneStart.getDate();
    dateOneStart.getHours();
    dateOneStart.getMinutes();
    //Окончание
    let end = dateOneEnd.getDate();
    dateOneEnd.getHours();
    dateOneEnd.getMinutes();
    let dataLoop = {sammary: sammary,
      description: description}
    for (var i = start; i <= end; i++) {
        if (arrayWithData.indexOf(i) === -1) {
          arrayWithData[i] = dataLoop;
        }
        else {
          arrayWithData[i].push(dataLoop);

        }
      }
    }
    console.log(arrayWithData);

})


export default function OneDay(mouth, day) {

console.log(mouth);
  return(
    <div>
      <div className="wrapper-one-day-header">
        <p>Сегодня</p>
        <p> {mouth.day} {nameMonth[mouth.mouth]}</p>
        <p>мероприятий</p>
      </div>
      <div >
        <ul className="list-events-one-day">
          <li><img src={ user } /><p>Аня</p><p>Сбор мусора</p> <a href="#">Присоединиться</a></li>
          <li><img src={ user } /><p>Аня</p><p>Сбор мусора</p> <a href="#">Присоединиться</a></li>
          <li><img src={ user } /><p>Аня</p><p>Сбор мусора</p> <a href="#">Присоединиться</a></li>
        </ul>
      </div>
      <div className="button-create-new-evernt">
        <a href="#" >Создать</a>
      </div>
    </div>
  )
}
