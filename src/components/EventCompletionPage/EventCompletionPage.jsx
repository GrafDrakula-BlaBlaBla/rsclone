import React from 'react';
import styles from './_EventCompletionPage.module.scss';
import Map from '../Map/Map';
import EventCompletion from './EventCompletion/EventCompletion';

const EventCompletionPage = () => {
  return (
    <div className={ styles.container }>
      <div className={ styles.left_section }>
       <Map />
      </div>
      <div className={ styles.right_section }>
        <EventCompletion />
      </div>
    </div>
  );
}

export default EventCompletionPage;