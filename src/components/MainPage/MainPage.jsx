import React from 'react';
import styles from './_MainPage.module.scss';
import MainSection from './MainSection/MainSection';

export default function MainPage() {
  return (
    <div className={ styles.page }>
      <div className={ styles.left_section }>MAP</div>
      <div className={ styles.right_section }>
        <MainSection />
      </div>
    </div>
  );
}