import React from 'react';
import styles from './_Leaves.module.scss';
import leafIcon from '../../../modules/assets/leaf.svg';
import emptyLeafIcon from '../../../modules/assets/empty-leaf.svg';

export default function Leaves({ rating, setModalState }) {
  const leaves = [];
    
  for (let i = 1; i <= 5; i += 1) {
    if(i <= rating) {
      leaves.push(
      <img className={ styles['leaf-img'] } src={ leafIcon } alt="leaf" key={ i } />
      );
    } else {
      leaves.push(
      <img className={ styles['leaf-img'] } src={ emptyLeafIcon } alt="empty-leaf" key={ i } />
      );
    }
  }

  return (
    <div className={ styles['leaves'] } onClick={ () => setModalState(true)}>
      { leaves }
    </div>
  );
}