import React from 'react';
import Calendar from './../Calendar/Calendar';
import Map from './../Map/Map';
import styles from './_Initiatives.module.scss';

export default function Initiatives() {

  return(
    <div className={ styles.wrapper }>
      <div className={ styles.left_section }>
        <Map />
      </div>
      <div className={ styles.right_section }>
        <Calendar />
      </div>
    </div>
  );
}
