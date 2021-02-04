import React from 'react';
import styles from './_WelcomeGameModal.module.scss';

export default function WelcomeGameModal({ setIsWelcomeModal }) {
  return (
    <div className={ styles.wrapper }>
      <div className={ styles.container }>
        <p className='font_l'>Добро пожаловать в игру!</p>
        <div className={ styles.main }>
          <p>Здесь вы научитесь правильно сортировать мусор.</p>
          <p>Игра подходит как взрослым так и детям.</p>
          <p>После прохождение вам начисляться 100 едениц рэйтинга.</p>
        </div>
        <button
          className={ styles.confirm_btn }
          onClick={ () => setIsWelcomeModal(false) }>
          Закртыть
        </button>
      </div>
    </div>
  );
}