import React from 'react';
import styles from './_RatingModal.module.scss';
import closeIcon from '../../../modules/assets/close.svg';
import Leaves from '../Leaves/Leaves';
import { Link } from "react-router-dom";

export default function RatingModal({ setModalState, levels }) {

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
          { levels.map((elem, id) => {
            return (
              <div className={ styles.level }>
                <Leaves rating={ id + 1 } />
                <p className={ styles.level_title }>{elem}</p>
              </div>
            );
          }) }
        </div>
        <div className={ styles.description }>
          <p className={ styles.description_text }>
            Для получения нового уровня нужны очки которые можно получить:
          </p>
          <div className={ styles.links }>
            <Link className={ styles.links_item + ' green_btn' } to='/'>Инициатива</Link>
            <Link className={ styles.links_item + ' green_btn' } to='/'>Игра</Link>
          </div>
        </div>
      </div>
    </div>
  );
}