import React from 'react';
import styles from './_EventPage.module.scss';
import EventSection from './EventSection/EventSection';

export default function EventPage() {
  return (
    <div className={ styles.container }>
      <div className={ styles.left_section }>MAP</div>
      <div className={ styles.right_section }>
        <EventSection />
      </div>
    </div>
  );
}