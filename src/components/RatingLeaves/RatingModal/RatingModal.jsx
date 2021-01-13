import React from 'react';
import styles from './_RatingModal.module.scss';
import closeIcon from '../../../modules/assets/close.svg';
import Leaves from '../Leaves/Leaves';


export default function RatingModal({ setModalState }) {

  function closeModal() {
    setModalState(false)
  }

  return (
    <div className={ styles.container } onClick={(elem) => {
      if(elem.target.classList.contains(styles.container)) {
        closeModal();
      }
    }}>
      <div className={ styles.main }>
        <div className={ styles.close_btn } onClick={ closeModal }>
          <img src={ closeIcon } alt="close-cross"/>
        </div>
        <div className={ styles.levels }>
          <p className={ styles.levels_title }>Уровни</p>
        </div>
      </div>
    </div>
  );
}