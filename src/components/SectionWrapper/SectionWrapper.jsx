import React from 'react';
import './_SectionWrapper.scss';

export default function SectionWrapper({ title, children }) {
  return (
    <div className='section-wrapper'>
      <div className="section-wrapper__header">
        <span className="header-title">{ title }</span>
      </div>
      <div className="section-wrapper__main">
        { children }
      </div>
    </div>
  );
}