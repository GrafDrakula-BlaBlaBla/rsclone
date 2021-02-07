import React, { useEffect, setState } from 'react';
import './_Profile.scss';
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import EventsHistory from './EventsHistory/EventsHistory';
import EventsList from './EventsList/EventsList';
import EditProfile from './EditProfile/componentEditProfile';
import RatingLeaves from '../RatingLeaves/RatingLeaves';
import { observer, inject } from "mobx-react";


const Profile = inject( "store" ) (observer( ({store}) => {


useEffect(() => {

  store.User.getIdinLocalStore();
  store.User.getValue(store.User.id);

}, [ store.User ])

function changeSettings() {
<<<<<<< HEAD
  store.User.editProfile = !store.User.editProfile;
=======
  store.User.editProfile = true;
>>>>>>> 1a439ee (add: structure edit profile)
}


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
            <div className="setting-button">
              <img className="navigation-button" onClick={changeSettings} src={ process.env.PUBLIC_URL + "icon-settings.svg"} alt="user"/>
              <img  className="leave-button" src={ process.env.PUBLIC_URL + "leave-profile.png"} alt="user" onClick={store.User.logOutOfProfile}/>
            </div>
          </div>
          {store.User.editProfile ? <EditProfile/> : <EventsHistory />}
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
