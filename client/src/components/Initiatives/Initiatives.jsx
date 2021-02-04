import React from 'react';
import Calendar from './../Calendar/Calendar';
import MapMain from './../MapMain/MapMain';
import styles from './_Initiatives.module.scss';

export default function Initiatives() {

  return(
    <div className={ styles.wrapper }>
      <div className={ styles.left_section }>
        <MapMain />
      </div>
      <div className={ styles.right_section }>
        <Calendar />
      </div>
    </div>
  );
}
