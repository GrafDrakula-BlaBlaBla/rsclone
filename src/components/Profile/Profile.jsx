import React from 'react';
import './_Profile.scss';
import userImg from '../../modules/assets/user.svg';
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import EventsHistory from './EventsHistory/EventsHistory';
import EventsList from './EventsList/EventsList';
import RatingLeaves from '../RatingLeaves/RatingLeaves';

export default function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-section">
        <SectionWrapper title='Профиль'>
          <div className="profile-info">
            <div className="user-pic">
              <img className="user-pic-img" src={ userImg } alt="user"/>
            </div>
            <div className="profile-info-middle">
              <div className="user-name">Аня</div>
              <div className="registration-date">
                На портале с 12.12.2020
              </div>
            </div>
            <div className="user-rate">
              <RatingLeaves rating={ 2 }/>
            </div>
          </div>
          <EventsHistory />
        </SectionWrapper>
      </div>
      <div className="event-list-section">
        <SectionWrapper title='Мероприятия'>
          <EventsList />
        </SectionWrapper>
      </div>
    </div>
  );
};