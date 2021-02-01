import React, { useEffect } from 'react';
import './_EventsHistory.scss';
import  evetnsProfile from '../../../actions/EventsForProfile';
import { observer, inject } from "mobx-react";


const EventsHistory = inject( "store" ) (observer( ({store}) => {

  return (
    <div className="events-history">
      <div className="events-history-title">История событий</div>
      <div className="events-history-items">
        { store.User.eventsHistory }
      </div>
    </div>
  );
 }))

export default EventsHistory;
