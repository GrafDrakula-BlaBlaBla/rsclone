import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import styles from './_EventInfo.module.scss';
import Map from "./Map/Map";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import axios from 'axios';
import EventSection from './EventSection/EventSection';

export default function EventInfo() {
  const [eventData, setEventData] = useState({
    title: '',
    startDate: null,
    endDate: null,
    ownerId: '',
    description: '',
    goal: '',
    eventLocation: [],
    members: [],
    completed: null
  });
  
  const eventHash = useLocation().hash.slice(1);
  
  useEffect(() => {
    axios.post('http://localhost:8000/eventInfo', { googleId: eventHash}).then((data) => {
      const event = data.data;
      
      setEventData({
        title: event.eventTitle,
        startDate: new Date(event.startDate),
        endDate: new Date(event.endDate),
        ownerId: event.user,
        description: event.description,
        goal: event.goal,
        eventLocation: event.location,
        members: event.members,
        completed: event.completed
      });
    });
  }, [eventHash]);

  return (
    <div className={styles.container}>
      <div className={styles.left_section}>
        <Map eventTitle={ eventData.title } position={ eventData.eventLocation }/>
      </div>
      <div className={styles.right_section}>
        <SectionWrapper
          title={ eventData.title }
          time={
            eventData.startDate && eventData.endDate
            ? `с ${eventData.startDate.getDate()}.${eventData.startDate.getMonth()}.${eventData.startDate.getFullYear()}
            - по ${eventData.endDate.getDate()}.${eventData.endDate.getMonth()}.${eventData.endDate.getFullYear()}`
            : ''
          }
        >
          <EventSection eventData={eventData}/>
        </SectionWrapper>
      </div>
    </div>
  );
}