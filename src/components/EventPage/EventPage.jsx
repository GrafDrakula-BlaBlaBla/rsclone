import React, { useState, useEffect } from "react";
import { inject } from "mobx-react";
import styles from "./_EventPage.module.scss";
import { useLocation } from 'react-router-dom'
import Map from "../Map/Map";
import EventSection from "./EventSection/EventSection";
import EventCompletion from "./EventCompletion/EventCompletion";
import EventCreation from "./EventCreation/EventCreation";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import resultFetch from  '../../actions/requestInCalendarGoogle.jsx';

const EventPage = inject("store")(({ store, section }) => {
  const [eventData, setEventData] = useState({
    title: '',
    startDate: null,
    endDate: null
  });
  
  const eventHash = useLocation().hash.slice(1);
  
  useEffect(() => {
    resultFetch().then((data) => {
      const currenItem = data.find((elem) => elem.id === eventHash);
      console.log(currenItem)
      setEventData({
        title: currenItem.summary,
        startDate: new Date(currenItem.start.dateTime),
        endDate: new Date(currenItem.end.dateTime)
      });
    });
  }, [eventHash]);

  function checkSection() {
    if (section === "create") {
      return (
        <SectionWrapper title="Создание мероприятия">
          <EventCreation
            storeEvent={store.Event}
            locationStore={store.Location}
          />
        </SectionWrapper>
      );
    } else if (section === "completion") {
      return (
        <SectionWrapper
          // storeEvent={storeEvent}
          title="Завершение"
          time="с 12.12.2020 - по 02.02.2021"
        >
          <EventCompletion />
        </SectionWrapper>
      );
    } else {
      return (
        <SectionWrapper
          // storeEvent={storeEvent}
          title={ eventData.title }
          time={
            eventData.startDate !== null && eventData.endDate !== null
            ? `с ${eventData.startDate.getDate()}.${eventData.startDate.getMonth()}.${eventData.startDate.getFullYear()}
            - по ${eventData.endDate.getDate()}.${eventData.endDate.getMonth()}.${eventData.endDate.getFullYear()}`
            : ''
          }
        >
          <EventSection eventData={eventData}/>
        </SectionWrapper>
      );
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.left_section}>
        <Map />
      </div>
      <div className={styles.right_section}>{checkSection()}</div>
    </div>
  );
});

export default EventPage;
