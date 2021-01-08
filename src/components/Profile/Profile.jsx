import React from 'react';
import './_Profile.scss';
import userImg from '../../modules/assets/user.svg';
import emptyStarIcon from '../../modules/assets/empty-star.svg';
import starIcon from '../../modules/assets/star.svg';
import EventsHistory from './EventsHistory/EventsHistory';

export default function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-top">
        <span className="profile-title">Профель</span>
      </div>
      <div className="profile-main">
        <div className="profile-left-section">
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
        </div>
        <div className="profile-right-section"></div>
      </div>
    </div>
  );
};

function UserStars({ rating }) {
  const stars = [];
    
  for (let i = 1; i <= 5; i += 1) {
    if(i <= rating) {
      stars.push(<img src={ starIcon } alt="star" key={ i } />);
    } else {
      stars.push(<img src={ emptyStarIcon } alt="star" key={ i } />);
    }
  }

  return (
    <div className="user-stars">
      { stars }
    </div>
  );
}