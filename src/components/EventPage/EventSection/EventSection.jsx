import React from 'react';
import styles from './_EventSection.module.scss';
import SectionWrapper from '../../SectionWrapper/SectionWrapper';

const eventData = {
  name: 'Сбор мусора',

}

export default function EventSection () {
  return (
    <SectionWrapper title={ eventData.name }>
          <div className={ styles.main }>
            
          </div>
        </SectionWrapper>
  );
}