import React from 'react';
import styles from './_GameRulesModal.module.scss';
import paperContainer from '../../../../modules/assets/game/paper-container.png';
import glassContainer from '../../../../modules/assets/game/glass-container.png';
import plasticContainer from '../../../../modules/assets/game/plastic-container.png';

export default function GameRulesModal({ setIsGameRules }) {
  return (
    <div className={ styles.wrapper }>
      <div className={ styles.container }>
        <p className="font_l">Правила:</p>
        <p className={ styles.rules }>
          Цель игры отчистить ировое поле от мусора,
          распределив его по контейнерам.</p>
        <ul className={ styles.list }>
          <li className={ styles.item }>
            <img className={ styles.trash_container } src={ paperContainer } alt="paper container"/>
            <p className={ styles.item_info }>Зелёный контейнер для бумаги</p>
          </li>
          <li className={ styles.item }>
            <img className={ styles.trash_container } src={ glassContainer } alt="paper container"/>
            <p className={ styles.item_info }>Красный контейнер для стекла</p>
          </li>
          <li className={ styles.item }>
            <img className={ styles.trash_container } src={ plasticContainer } alt="paper container"/>
            <p className={ styles.item_info }>Синий контейнер для пластика</p>
          </li>
        </ul>
        <button className={ styles.confirm_btn } onClick={ () => setIsGameRules(false)}>Принять</button>
      </div>
    </div>
  );
}