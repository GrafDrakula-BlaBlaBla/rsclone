import React, { useEffect, useState } from 'react';
import './_Profile.scss';
import userImg from '../../modules/assets/user.svg';
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import EventsHistory from './EventsHistory/EventsHistory';
import EventsList from './EventsList/EventsList';
import RatingLeaves from '../RatingLeaves/RatingLeaves';
// import Store from './../../store/index';
import { observer, inject } from "mobx-react";
import env from "react-dotenv";

const Profile = inject( "store" ) (observer( ({store}) => {

useEffect(() => {

store.User.getValue();

      }, [])


  return (
    <div className="profile-page">
      <div className="profile-section">
        <SectionWrapper title='Профиль'>
          <div className="profile-info">

            <div className="user-pic">
              <img className="user-pic-img" src={ process.env.PUBLIC_URL + "/userIcon/" + store.User.avatar } alt="user"/>
            </div>

            <div className="profile-info-middle">

              <div className="user-name">{ store.User.name } </div>
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
