import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom'
import styles from "./_EditEvent.module.scss";
import Map from '../Map/Map';
import EditSection from './EditSection/EditSection';
import { observer } from "mobx-react-lite";
import EventStore from '../EventStore';

const eventStore = new EventStore();

const EditEvent = observer(() => {

  const eventHash = useLocation().hash.slice(1);

  useEffect(() => {
    eventStore.getEventData(eventHash);
  }, [eventHash]);


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
