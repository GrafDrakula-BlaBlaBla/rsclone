import React, { useState, useEffect } from 'react';
import './_EventsHistory.scss';
import  evetnsProfile from '../../../actions/EventsForProfile';
import Store from '../../../store/index';

const nameMonth = [ 'января', 'февраля', 'марта', 'апреля', 'мая',
'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

export default function EventsHistory() {

  const [history, setHistory] = useState([]);

  useEffect(() => {

    evetnsProfile().then(( data ) => {

        const userGame = {
          eventTitle: 'Игру',
          startDate: new Date(Store.User.gameDay),
          user: Store.User.id,
        }
        data[0].push(userGame);
        console.log(data[0]);
        const itemList = createCards(data);
        setHistory(itemList)
    })
  }, [])

function createCards(events) {

const result = events[0].map((value, index) => {
  let now = new Date(value['startDate']);
  let kind = (value['user'] === Store.User.id) ? 'Получили 100 единиц кислорода за' : 'Присоединились к';
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

  return (
    <div className="events-history">
      <div className="events-history-title">История событий</div>
      <div className="events-history-items">
        { history }
      </div>
    </div>
  );
}
