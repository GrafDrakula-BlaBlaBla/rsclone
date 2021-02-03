import React, { useEffect, setState } from 'react';
import './_Profile.scss';
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import EventsHistory from './EventsHistory/EventsHistory';
import EventsList from './EventsList/EventsList';
import RatingLeaves from '../RatingLeaves/RatingLeaves';
import { observer, inject } from "mobx-react";

const Profile = inject( "store" ) (observer( ({store}) => {


useEffect(() => {

  store.User.getIdinLocalStore();
  store.User.getValue(store.User.id);

}, [ store.User ])

  return (
    <div className="profile-page">
      <div className="profile-section">
        <SectionWrapper title='Профиль'>
          <div className="profile-info">
            <div className="user-pic">
              <img className="user-pic-img" src={ process.env.PUBLIC_URL + "/userIcon/" + store.User.avatar } alt="user"/>
            </div>
            <div className="profile-info-middle">
              <div className="user-name"> { store.User.name } </div>
              <div className="registration-date">
                На портале с { store.User.dataRegistartion }
              </div>
            </div>
            <div className="user-rate">
                <RatingLeaves rating={ store.User.range }/>
                <div className="oxygen"> { store.User.oxygen } кислорода</div>
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
  })
)

export default Profile;
