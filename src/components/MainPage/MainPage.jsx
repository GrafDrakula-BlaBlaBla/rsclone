import React from 'react';
import styles from './_MainPage.module.scss';
import MainSection from './MainSection/MainSection';
import MapMain from './../MapMain/MapMain'

export default function MainPage() {
  console.log(process.env.PUBLIC_URL)
  return (
    <div className={ styles.page }>
      <div className={ styles.left_section }><MapMain /></div>
      <div className={ styles.right_section }>
        <MainSection />
      </div>
    </div>
  );
}
