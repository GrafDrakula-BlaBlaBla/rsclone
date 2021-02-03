import React, { useState, useEffect } from 'react';
import styles from './_EventSection.module.scss';
import userImg from '../../../../modules/assets/user.svg'
import RatingLeaves from '../../../RatingLeaves/RatingLeaves';
import axios from 'axios';

export default function EventSection({ eventData }) {
  const [ownerData, setOwnerData] = useState({
    ownerName: '',
    ownerImg: '',
  });

  useEffect(() => {
    eventData.ownerId && axios.post('http://localhost:8000/userInfo', { userId: eventData.ownerId}).then((data) => {
      const user = data.data;
      
      setOwnerData({
        name: user.name,
        img: user.avatar,
        rating: user.range
      });
    });
  }, [eventData.ownerId]);

  return (
    <div className={ styles.main }>
      <div className={ styles.owner }>
        <div className={ styles.user_pic }>
          <img className={ styles.user_pic_img } src={ userImg } alt="user-pic"/>
        </div>
        <p className={ styles.user_name + ' font_x' }>{ownerData.name}</p>
        <RatingLeaves rating={ ownerData.rating }/>
      </div>
      <div className={ styles.tasks }>
        <p className='font_l'>Цели:</p>
        <p style={{ marginTop: 20}}>
          { eventData.goal }
        </p>
      </div>
      <div className={ styles.goals }>
        <p className='font_l'>Описание:</p>
        <p style={{ marginTop: 20}}>
          { eventData.description }
        </p>
      </div>
      <div className={ styles.bottom }>
        <div className={ styles.connect_block }>
          <p className='font_s' style={{ marginBottom: 20}}>С нами уже { eventData.members.length } человек</p>
          <button className='green_btn'>Присоедениться</button>
        </div>
      </div>
    </div>
  );
}