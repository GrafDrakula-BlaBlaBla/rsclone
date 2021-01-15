import React from 'react';
import styles from './_EventPage.module.scss';
import Map from '../Map/Map';
import EventSection from './EventSection/EventSection';
import EventCompletion from './EventCompletion/EventCompletion';
import EventCreation from './EventCreation/EventCreation';
import SectionWrapper from '../SectionWrapper/SectionWrapper';

export default function EventPage({ section }) {

  function checkSection() {
    if (section === 'create') {
      return <SectionWrapper title='Создание мероприятия'><EventCreation /></SectionWrapper>
    } else if (section === 'completion') {
      return <SectionWrapper title='Завершение'>
        <EventCompletion />
      </SectionWrapper>
    } else {
      return <SectionWrapper title='Сбор мусора' time='с 12.12.2020 - по 02.02.2021'>
        <EventSection />
      </SectionWrapper>
    }
  }


  return (
    <div className={ styles.container }>
      <div className={ styles.left_section }>
        <Map />
      </div>
      <div className={ styles.right_section }>
        { checkSection() }
      </div>
    </div>
  );
}