import React, { useState } from 'react';
import styles from './_RatingLeaves.module.scss';
import Leaves from './Leaves/Leaves';
import RatingModal from './RatingModal/RatingModal';

const levels = [ 'Новичок', 'Любитель', 'Специалист', 'Эксперт', 'Эколог' ];


export default function RatingLeaves({ rating }) {
  const [modalState, setModalState] = useState(false);

  const currentRating = Math.round(rating / 2 / 100);

  return (
    <div className={ styles['rating-leaves-container'] }>
      <Leaves rating={ currentRating } setModalState={ setModalState }/>
      <div className={ styles['rating-title'] } onClick={ () => setModalState(true)}>
        {levels[currentRating]}
      </div>
      { modalState && <RatingModal setModalState={ setModalState } levels={ levels }/> }
    </div>
  );
}
