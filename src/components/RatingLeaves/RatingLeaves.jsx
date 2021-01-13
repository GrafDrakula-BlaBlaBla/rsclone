import React, { useState } from 'react';
import styles from './_RatingLeaves.module.scss';
import Leaves from './Leaves/Leaves';
import RatingModal from './RatingModal/RatingModal';

const levels = [ 'Новичёк', 'Любитель', 'Специалист', 'Эксперт', 'Эколог' ];


export default function RatingLeaves({ rating }) {
  const [modalState, setModalState] = useState(false);

  return (
    <div className={ styles['rating-leaves-container'] }>
      <Leaves rating={ rating } setModalState={ setModalState }/>
      <div className={ styles['rating-title'] } onClick={ () => setModalState(true)}>
        {levels[rating - 1]}
      </div>
      { modalState && <RatingModal setModalState={ setModalState } levels={ levels }/> }
    </div>
  );
}