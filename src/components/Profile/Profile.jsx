import React from 'react';
import './_Profile.scss';
import userImg from '../../modules/assets/user.svg';
import leafIcon from '../../modules/assets/leaf.svg';
import emptyLeafIcon from '../../modules/assets/empty-leaf.svg';
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import EventsHistory from './EventsHistory/EventsHistory';
import EventsList from './EventsList/EventsList';

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
              <UserStars rating={ 2 }/>
              <div className="user-rate-title">Любитель</div>
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

function UserStars({ rating }) {
  const stars = [];
    
  for (let i = 1; i <= 5; i += 1) {
    if(i <= rating) {
      stars.push(<img src={ leafIcon } alt="star" key={ i } />);
    } else {
      stars.push(<img src={ emptyLeafIcon } alt="star" key={ i } />);
    }
  }

  return (
    <div className="user-stars">
      { stars }
    </div>
  );
}