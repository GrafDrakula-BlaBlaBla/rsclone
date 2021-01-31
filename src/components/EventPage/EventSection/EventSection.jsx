import React from 'react';
import styles from './_EventSection.module.scss';
import userImg from '../../../modules/assets/user.svg'
import RatingLeaves from '../../RatingLeaves/RatingLeaves';

export default function EventSection({ eventData }) {
  return (
    <div className={ styles.main }>
      <div className={ styles.owner }>
        <div className={ styles.user_pic }>
          <img className={ styles.user_pic_img } src={ userImg } alt="user-pic"/>
        </div>
        <p className={ styles.user_name + ' font_x' }>{eventData.ownerName}</p>
        <RatingLeaves rating={ eventData.ownerRate }/>
      </div>
      <div className={ styles.tasks }>
        <p className='font_l'>Задача:</p>
        <p style={{ marginTop: 20}}>
          { eventData.tasks }
        </p>
      </div>
      <div className={ styles.goals }>
        <p className='font_l'>Цели:</p>
        <p style={{ marginTop: 20}}>
          { eventData.goals }
        </p>
      </div>
      <div className={ styles.bottom }>
        <div className={ styles.connect_block }>
          <p className='font_s' style={{ marginBottom: 20}}>С нами уже { eventData.peoples } человек</p>
          <button className='green_btn'>Присоедениться</button>
        </div>
      </div>
    </div>
  );
}