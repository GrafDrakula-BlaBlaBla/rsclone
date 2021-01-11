import React from 'react';
import './_EventCreationPage.scss';
import SectionWrapper from '../SectionWrapper/SectionWrapper';

export default function EventCreationPage() {
  return (
    <div className='event-creation-page'>
      <div className='map-section'>MAP</div>
      <div className="creator-section">
        <SectionWrapper title='Создание'>
          <div className="creator-main">

          </div>
        </SectionWrapper>
      </div>
    </div>
  );
}