import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import styles from "./_EditEvent.module.scss";
import Map from '../Map/Map';
import axios from 'axios';
import EditSection from './EditSection/EditSection';
import { observer } from "mobx-react-lite";
import EventStore from '../EventStore';

const eventStore = new EventStore();

const EditEvent = observer(() => {
  // const [eventData, setEventData] = useState({
  //   title: '',
  //   startDate: null,
  //   endDate: null,
  //   ownerId: '',
  //   description: '',
  //   goal: '',
  //   location: [],
  //   members: [],
  //   completed: null,
  // });

  const eventHash = useLocation().hash.slice(1);

  useEffect(() => {
    eventStore.getData(eventHash)

    // axios.post('http://localhost:8000/eventInfo', { googleId: eventHash}).then((data) => {
    //   const event = data.data;

    //   setEventData({
    //     title: event.eventTitle,
    //     startDate: new Date(event.startDate),
    //     endDate: new Date(event.endDate),
    //     ownerId: event.user,
    //     description: event.description,
    //     goal: event.goal,
    //     location: event.location,
    //     members: event.members,
    //     completed: event.completed,
    //   });
    // });
  }, [eventHash]);
  console.log(eventStore.title);

  return (
    <div className={styles.container}>
      <div className={styles.left_section}>
        <Map eventTitle={ eventStore.title } position={ eventStore.location }/>
      </div>
      <div className={styles.right_section}>
        <EditSection eventData={ eventStore } eventHash={ eventHash }/>
      </div>
    </div>
  );
});

export default EditEvent;
