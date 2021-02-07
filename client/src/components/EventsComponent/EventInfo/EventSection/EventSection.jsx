import React, { useState, useEffect } from 'react';
import styles from './_EventSection.module.scss';
import userImg from '../../../../modules/assets/user.svg'
import RatingLeaves from '../../../RatingLeaves/RatingLeaves';
import Store from '../../../../store/index';
import { Link } from "react-router-dom";
import requestAdd from '../../../../actions/addUserEvent'
import axios from 'axios';

export default function EventSection({ eventData }) {

  const [ownerData, setOwnerData] = useState({
    ownerName: '',
    ownerImg: '',
  });

  const [mambers, setMembers] = useState("C нами пока никого нет" );

  useEffect(() => {

    eventData.ownerId && axios.post(process.env.REACT_APP_SERVER + 'userInfo', { userId: eventData.ownerId}).then((data) => {
      const user = data.data;

      setOwnerData({
        name: user.name,
        img: user.avatar,
        rating: user.range,

      });
    });

    if( eventData.members.length !== 0 ){
      setMembers("С нами уже " + eventData.members.length + " " + wordForm(eventData.members.length));
    }

  }, [eventData.ownerId]);


 const addToTheEvent = (e) => {

   if(eventData.members.indexOf(Store.User.decodeId()) === -1){
     requestAdd(eventData.idEvent, Store.User.decodeId());
     setMembers("С нами уже " + (+ eventData.members.length + 1) + " " + wordForm(eventData.members.length));
     eventData.members.push(Store.User.decodeId());
   }
}

const wordForm = function( num ){
  const cases = [2, 0, 1, 1, 1, 2];
  const words = ['человек', 'человека', 'человек'];
  return words[ (num%100>4 && num%100<20)? 2 : cases[(num%10<5)?num%10:5] ];
}


  return (
    <div className={ styles.main }>
      <div>
        <div className={ styles.owner }>
          <div className={ styles.user_pic }>
            <img className={ styles.user_pic_img } src={ userImg } alt="user-pic"/>
          </div>
          <p className={ styles.user_name + ' font_x' }>{ownerData.name}</p>
          <RatingLeaves rating={ ownerData.rating }/>
        </div>
        <div className={styles.discription}>
          <div className={ styles.tasks }>
          <p className={ styles.title_disctiption }>Цели:</p>
          <p style={{ marginTop: 20}}>
          { eventData.goal }
          </p>
          </div>
          <div className={ styles.goals }>
            <p className={ styles.title_disctiption }>Описание:</p>
            <p style={{ marginTop: 20}}>
            { eventData.description }
            </p>
          </div>
        </div>
      </div>
      <div className={ styles.bottom }>
        <div className={ styles.connect_block }>
          <p className='font_s' style={{ marginBottom: 20}}>
          { mambers }</p>
          { Store.User.decodeId() === eventData.ownerId || Store.User.decodeId() === null || eventData.members.indexOf(Store.User.decodeId()) !== -1?
            <button className='green_btn'> <Link to="/createEvent"> Создать</Link></button> :
            <button className='green_btn' onClick={ addToTheEvent }> Присоедениться </button>
          }
        </div>
      </div>
    </div>
  );
}
