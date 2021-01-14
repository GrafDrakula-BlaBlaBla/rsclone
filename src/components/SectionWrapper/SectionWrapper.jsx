import React from 'react';
import styles from './_SectionWrapper.module.scss';

export default function SectionWrapper({ title, time, children }) {
  return (
    <div className={ styles.wrapper }>
      {title && <div className={ styles.header }>
        <span className={ styles.title }>{ title }</span>
        <span className={ styles.time }>{ time }</span>
      </div>
      }
      <div className={ styles.main }>
        { children }
      </div>
    </div>
  );
}