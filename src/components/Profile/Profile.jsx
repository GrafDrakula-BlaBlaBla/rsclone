import React, { useEffect, useState } from 'react';
import './_Profile.scss';
import userImg from '../../modules/assets/user.svg';
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import EventsHistory from './EventsHistory/EventsHistory';
import EventsList from './EventsList/EventsList';
import RatingLeaves from '../RatingLeaves/RatingLeaves';
import Store from './../../store/index';
import { observer } from "mobx-react-lite";
import env from "react-dotenv";

const Profile = observer( () => {

// export default function Profile() {
const [userAvatar, setImgUser] = useState(userImg);

useEffect(() => {
Store.User.getValue()
let urlImg = env.DOMAIN + Store.User.avatar;
setImgUser(urlImg);
console.log(process.env);
      }, [])


  return (
    <div className="profile-page">
      <div className="profile-section">
        <SectionWrapper title='Профиль'>
          <div className="profile-info">

            <div className="user-pic">

              <img className="user-pic-img" src={userImg } alt="user"/>
            </div>

            <div className="profile-info-middle">

              <div className="user-name">{ Store.User.name } </div>

              <div className="registration-date">
                На портале с { Store.User.dataRegistartion }
              </div>
            </div>
            <div className="user-rate">
                <RatingLeaves rating={ Store.User.range }/>
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
});

export default Profile;
